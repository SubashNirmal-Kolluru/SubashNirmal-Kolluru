
Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library(rvest)
certi=c()
time=c()
genre=c()
j=0
k=0
# v=c(2009:2016)

#for (i in v) {
url <- "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2009,2009&sort=moviemeter,asc&page=2&ref_=adv_nxt"
#  print (url)
web <- read_html(url)


totalcontent_html <- html_nodes(web,'.lister-item-content')
totalcontent <- html_text(totalcontent_html)
totalcontent_ <- gsub("\n","                                        ",totalcontent)# 40 spaces

rating=c()
data
rating_tab <- gsub("Rate this.*","",totalcontent)
rating_data <- gsub("Director.*","",gsub("Stars.*","",rating_tab))
rating_data <- gsub(".*min","",gsub(".*\\|","",rating_data))
rating_data <- gsub(".*2009","",rating_data)
rating_data <- substring(gsub("[^0-9\\.]", "", rating_data),1,3)

rating_tab <- html_text(html_nodes(web,'.ratings-bar'))
rating_data <- gsub("\n","",gsub("Rate.*","",rating_tab))
rating <- c(rating,as.numeric(rating_data))

genre_tab <- gsub("Rate.*","",totalcontent)
genre_tab<- gsub("\n","                    ",genre_tab)# 20 spaces

genre_tab <- gsub(" ","",substring(genre_tab,195))
genre_tab <- gsub("\\|","                                                             ",genre_tab)#60 spaces
for (i in genre_tab){
  if(nchar(i)<60){
    genre=c(genre,i)
    certi=c(certi," ")
    time=c(time," ")
  }
  else if(nchar(i)<120){
    genre=c(genre,gsub(" ","",substring(i,50)))
    time=c(time,gsub(" .*","",i))
    certi=c(certi," ")
  }
  else{
    certi=c(certi,gsub(" .*","",i))
    time=c(time,gsub(" ","",substring(i,50,100)))
    genre=c(genre,gsub(" ","",substring(i,100)))
  }
}
genre <- gsub("[[:digit:]]", "", genre)
 
  
description <- gsub(".*/10","",totalcontent)
description <- gsub("Director.*","",gsub("Stars.*","",description))
description <- gsub("\\.\\.\\..*","...",description)
description <- substring(gsub("\n","",description),2)
description <- gsub("  ","",description)

votes <- gsub(".*Votes:","",gsub("\n","        ",totalcontent))
votes <- as.numeric(gsub(",","",(gsub(" ","",gsub("\\|.*","",votes)))))
