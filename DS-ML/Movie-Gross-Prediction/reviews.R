Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library('rvest')
emp_data <- data.frame(Movie <- c(),Review <- c())
title_new <- c()

v=c("http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2009,2009&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2009,2009&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2009,2009&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2009,2009&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2010,2010&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2010,2010&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2010,2010&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2010,2010&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2011,2011&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2011,2011&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2011,2011&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2011,2011&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2012,2012&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2012,2012&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2012,2012&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2012,2012&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2012,2012&sort=moviemeter,asc&page=5&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2013,2013&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2013,2013&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2013,2013&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2013,2013&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2013,2013&sort=moviemeter,asc&page=5&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2014,2014&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2014,2014&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2014,2014&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2014,2014&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2014,2014&sort=moviemeter,asc&page=5&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2015,2015&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2015,2015&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2015,2015&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2015,2015&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2015,2015&sort=moviemeter,asc&page=5&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2016,2016&sort=moviemeter,asc&page=1&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2016,2016&sort=moviemeter,asc&page=2&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2016,2016&sort=moviemeter,asc&page=3&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2016,2016&sort=moviemeter,asc&page=4&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2016,2016&sort=moviemeter,asc&page=5&ref_=adv_nxt",
    "http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2016,2016&sort=moviemeter,asc&page=6&ref_=adv_nxt")

for (link in v){
  
  web <- read_html(link)
title_html <- html_nodes(web,'.lister-item-header a')
title <- html_text(title_html)
title_new <- c(title_new,title)

for (movie in title){

reviews=c()
if (movie == "Help" || movie == "Michael" || movie == "W" || movie == "Tiger" || movie == "Box"){
 reviews=c("")
 emp_new_data <- data.frame(Movie=movie, Reviews=reviews)
 emp_data <- rbind(emp_data,emp_new_data)
  next
}

  web_movie <- html_session(link) %>% follow_link(movie)
  
  #navigating to reviews tab
  review <- html_text(html_node(web_movie,"#content-2-wide"))
  review <- gsub(".*Frequently Asked Questions","",review)
  review <- gsub(".*Review this title","",gsub("Contribute to This Page.*","",review))
if (grepl("See all  user reviews",gsub(",","",gsub("[0-9]","",review)))){
  review <- substring(gsub("\\|","",gsub("\n","                    ",review)),2,110)
  review <- gsub(".*See","See",gsub("views.*","views",review))
  #}
  compdetails_tab <- html_nodes(web_movie,'#titleDetails')
  compdetails_tab <- html_text(compdetails_tab)
  date <- gsub(" \\(.*","",gsub(".*Release Date: ","",compdetails_tab))
#extracting date number
  date_no <- gsub("2010.*","",gsub("2009.*","",gsub("2011.*","",gsub("2012.*","",gsub("2013.*","",gsub("2014.*","",gsub("2015.*","",gsub("2016.*","",date))))))))
  date_no <- as.numeric(gsub("[^0-9]","",date_no))
#prnting 3 dates 
  #check whether date is less than 10 or not
  if (is.na(date_no)){
    reviews <- c("")
    emp_new_data <- data.frame(Movie=movie, Reviews=reviews)
    emp_data <- rbind(emp_data,emp_new_data)
    next
  }
  if (date_no/10<1 ){
    date_str1 <- paste(toString(date_no-1),substring(date,3))
    date_str2 <- paste(toString(date_no),substring(date,3))
    date_str3 <- paste(toString(date_no+1),substring(date,3))
  }else{
    date_str1 <- paste(toString(date_no-1),substring(date,4))
    date_str2 <- paste(toString(date_no),substring(date,4))
    date_str3 <- paste(toString(date_no+1),substring(date,4))
  }
  
  h <- web_movie %>% follow_link(review)
  count=0
  
  next_tab <- html_text(html_node(h,'font'))
  if(is.na(next_tab)){
    reviews_tab <- html_text(html_nodes(h,'hr+ div'))
    for (i in reviews_tab){
      if (grepl(date_str1,i)||grepl(date_str2,i)||grepl(date_str3,i)){
        reviews <- c(reviews,gsub("\nAuthor:.*","",gsub(".*following review useful:\n","",i)))
        count=count+1
      }}
    if (count == 0){
      reviews <- c("")
    }
  }else{
  next_tab <- substring(gsub("[^0-9]","",next_tab),2)
  next_tab <- as.numeric(next_tab)
  for (j in 1:next_tab-1){
#for reviews in one page  
  reviews_tab <- html_text(html_nodes(h,'hr+ div'))
  for (i in reviews_tab){
  if (grepl(date_str1,i)||grepl(date_str2,i)||grepl(date_str3,i)){
      reviews <- c(reviews,gsub("\nAuthor:.*","",gsub(".*following review useful:\n","",i)))
      count=count+1
  }}
  h <- h %>% follow_link(paste("[",toString(j+1),"]",sep=""))
  }
  if (count == 0){
    reviews <- c("")
  }
  }
  }else {
    reviews <- c("")
  }
emp_new_data <- data.frame(Movie=movie, Reviews=gsub("   ","",reviews))

emp_data <- rbind(emp_data,emp_new_data)
}

}



  