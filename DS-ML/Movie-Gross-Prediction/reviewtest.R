Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library('rvest')

  reviews=c()
  
  web_movie <- read_html("http://www.imdb.com/title/tt1754202/?ref_=adv_li_tt")
  
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
    if (date_no/10<1 ){
    date_str1 <- paste(toString(date_no-1),substring(date,3))
    date_str2 <- paste(toString(date_no),substring(date,3))
    date_str3 <- paste(toString(date_no+1),substring(date,3))
    }else{
    date_str1 <- paste(toString(date_no-1),substring(date,4))
    date_str2 <- paste(toString(date_no),substring(date,4))
    date_str3 <- paste(toString(date_no+1),substring(date,4))
    }
    
    
    h <- html_session("http://www.imdb.com/title/tt1754202/?ref_=adv_li_tt") %>% follow_link(review)
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
  }



