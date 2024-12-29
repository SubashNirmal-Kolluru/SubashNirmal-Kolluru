Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library('rvest')

title = c()
cri_rating=c()
avg_rating=c()

month <- c(12:1)
year <- c(2016:2009)
for (a in year){
  for (b in month){
    if (b == 12 && a == 2016){
      url <- "http://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/moviearticlelistdatewise1/2742919.cms?query=*:*&startdate=2016-12-01&enddate=2016-12-31&sectionid=2742919"
    }
    else {
      url <- paste("http://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/moviearticlelistdatewise1/2742919.cms?query=*:*&startdate=",a,"-",b,"-01&enddate=",syear,"-",smonth,"-01&sectionid=2742919",sep="")
    }
    print (url)
    web <- read_html(url)

    title <- c(title,gsub("\n","",html_text(html_nodes(web,".mr_listing_right a"))))
    cri_rating <- c(cri_rating,as.numeric(gsub("/.*","",html_text(html_nodes(web,".critics_rating~ .ratingMovie")))))
    avg_rating <- c(avg_rating,as.numeric(gsub("/.*","",html_text(html_nodes(web,"#articlenew .clearfix div .ratingMovie")))))
    smonth <- b
    syear <- a 
  }
}
toi_data <- data.frame(Title=title,Critics_Rating=cri_rating,Avg_Readers_Rating=avg_rating )

library('RSQLite')
db <- dbConnect(SQLite(),dbname='movies.sqlite')
dbWriteTable(db,'TOI data',toi_data,overwrite=TRUE)