Sys.setenv(http_proxy="http://@172.16.2.30:8080")
Sys.setenv(https_proxy="http://@172.16.2.30:8080")
setwd("C:/Users/subashnirmal/Desktop/subash/studies/AMSM2/project/")
library(rvest)
v_data <- read.csv("playerweb_values1.csv")
p_values <- as.numeric(unlist(v_data[3]))
for (i in 1:length(p_values)){
  number <- c()
  name <- c()
  urls <- c(paste("http://www.howstat.com/cricket/Statistics/Players/PlayerOverview.asp?PlayerID=",p_values[i],sep = ""),
            paste("http://www.howstat.com/cricket/Statistics/Players/PlayerOverview_ODI.asp?PlayerID=",p_values[i],sep = ""),
            paste("http://www.howstat.com/cricket/Statistics/Players/PlayerOverview_T20.asp?PlayerID=",p_values[i],sep = ""),
            paste("http://www.howstat.com/cricket/Statistics/IPL/PlayerOverview.asp?PlayerID=",p_values[i],sep = ""))
  for (i in 1:length(urls)){
    url <- urls[i]
    web <- read_html(url)
    player_name <- html_text(html_nodes(web,'tr:nth-child(3) .FieldName+ td'))
    player_table <- html_text(html_nodes(web,'td td td:nth-child(1) td'))
    player_table1 <- gsub("\r\n                          ","",gsub("\t","",gsub("\r\n\t\t\t\t\t\t\t\t\t\t\t","",player_table[-1])))
    for (i in 1:length(player_table1)){
      if(i%%2==0){
        number <- c(number,player_table1[i])
      }
      if(i%%2==1){
        name <- c(name,player_table1[i])
      }
    }
    name <- c(name,c(" ","NAME"))
    number <- c(number,c(" ","NUMBER"))
  }
  player_name1 <- gsub(" ","_",gsub("\t","",gsub("[\r\n]","",player_name)))

 df <- data.frame(Name=name, Number=number)

 write.csv(df,paste(player_name1,'.csv',sep = ""))
}