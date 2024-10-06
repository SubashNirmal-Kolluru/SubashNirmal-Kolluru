Sys.setenv(http_proxy="http://@172.16.2.30:8080")
setwd("C:/Users/subashnirmal/Desktop/subash/studies/AMSM2/project2")

library(rvest)
ipl_data <- data.frame(Match_no=c(),Match=c(),Winner=c(),City=c(),Stadium=c(),Year=c())
web_no <- c(2058,2059,2060,2037,2115,2170,2261,2330,2430,2568)
year_no <- 2008

for(j in web_no){
  web <- read_html(paste("http://m.cricbuzz.com/cricket-series/",toString(j),"/indian-premier-league-2015/matches",sep = ""))
  match <- html_text(html_nodes(web,".cb-list-group-item-heading"))
  year <- rep(toString(year_no),length(match))
  place_data <- html_text(html_nodes(web,".cb-list-group-item-heading+ .cb-list-group-item-text"))
  match_no <- gsub(" at.*","",place_data)
  city <- gsub(".*,","",place_data)
  stadium <- gsub(".* at","",gsub(",.*","",place_data))
  winner_data <- html_text(html_nodes(web,".cb-match-status"))
  winner <- c()
  for (i in winner_data){
    if(grepl("won",i)){
      winner <- c(winner,gsub(" won.*","",i))
    }
    else{
      winner <- c(winner,"draw")
    }
  }
  ipl_data1 <- data.frame(Match_no=match_no,Match=match,Winner=winner,City=city,Stadium=stadium,Year=year)
  ipl_data <- rbind(ipl_data,ipl_data1)
  year_no <- year_no + 1
}
write.csv(ipl_data,"facetoface_ipl.csv")