Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library(rvest)
openingweekend=c()
moviename=c()
moviedate=c()
openingday=c()
endofweek=c()
gross=c()
v=c(2009:2016)

for (i in v) {
url <- paste("http://www.bollywoodhungama.com/box-office-collections/filterbycountry/IND/",i,sep = "")
print (url)
web <- read_html(url)

moviename_html <- html_nodes(web,'.movie-name')
moviename <- c(moviename,html_text(moviename_html))

moviedate_html <- html_nodes(web,'.date')
moviedate <- c(moviedate,html_text(moviedate_html))

openingday_html <- html_nodes(web,'.table-cell:nth-child(3) .amount')
openingday <- c(openingday,html_text(openingday_html))

openingweekend_html <- html_nodes(web,'.table-cell:nth-child(4) .amount')
openingweekend <- c(openingweekend,html_text(openingweekend_html))

endofweek_html <- html_nodes(web,'.table-cell:nth-child(5) .amount')
endofweek <- c(endofweek,html_text(endofweek_html))

gross_html <- html_nodes(web,'.table-cell:nth-child(6) .amount')
gross <- c(gross,html_text(gross_html))
}

#excluding \n , \t
moviedate <- gsub("\n","",gsub("\t","",moviedate))
openingday <- gsub("\n","",gsub("\t","",openingday))
openingweekend <- gsub("\n","",gsub("\t","",openingweekend))
endofweek <- gsub("\n","",gsub("\t","",endofweek))
gross <- gsub("\n","",gsub("\t","",gross))

#convering into numeric
openingday <- as.numeric(openingday)
openingweekend <- as.numeric(openingweekend)
endofweek <- as.numeric(endofweek)
gross <- as.numeric(gross)

betterdates <- as.Date(moviedate,format="%d %B %Y")

bmovies09 <- data.frame(Movie_names=moviename, Release_dates=moviedate,Opening_Day_Collection=openingday,
                        Opening_Weekend_Collection=openingweekend,First_Week_Collection=endofweek, Gross_Collection=gross )
