Sys.setenv(http_proxy="http://@10.3.100.207:8080")

# library(httr)
# set_config(use_proxy(url='http://@10.3.100.207', 8080))

library(rvest)
url <- "http://www.bollywoodhungama.com/box-office-collections/filterbycountry/IND/2009/"
web <- read_html(url)

moviename_html <- html_nodes(web,'.movie-name')
moviename <- html_text(moviename_html)

moviedate_html <- html_nodes(web,'.date')  
moviedate <- html_text(moviedate_html)
moviedate <- gsub("\n","",gsub("\t","",moviedate))

openingday_html <- html_nodes(web,'.table-cell:nth-child(3) .amount')
openingday <- html_text(openingday_html)
openingday <- gsub("\n","",gsub("\t","",openingday))
openingday <- as.numeric(openingday)

openingweekend_html <- html_nodes(web,'.table-cell:nth-child(4) .amount')
openingweekend <- html_text(openingweekend_html)
openingweekend <- gsub("\n","",gsub("\t","",openingweekend))
openingweekend <- as.numeric(openingweekend)

endofweek_html <- html_nodes(web,'.table-cell:nth-child(5) .amount')
endofweek <- html_text(endofweek_html)
endofweek <- gsub("\n","",gsub("\t","",endofweek))
endofweek <- as.numeric(endofweek)

gross_html <- html_nodes(web,'.table-cell:nth-child(6) .amount')
gross <- html_text(gross_html)
gross <- gsub("\n","",gsub("\t","",gross))
gross <- as.numeric(gross)

bmovies09 <- data.frame(Movie_names=moviename, Release_dates=moviedate,Opening_Day_Collection=openingday,
                        Opening_Weekend_Collection=openingweekend,First_Week_Collection=endofweek, Gross_Collection=gross )
