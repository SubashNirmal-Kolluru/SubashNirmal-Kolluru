Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library(rvest)
 certi=c()
 time=c()
 genre=c()
 title=c()
 rank=c()
 year=c()
 rating=c()
 directors=c()
 actors=c()
 votes=c()
 description=c()
 j=0
 k=0
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

for (i in v) {
  #url <- paste("http://www.imdb.com/search/title?languages=hi&title_type=feature&year=2009,2009&sort=moviemeter,asc&page=",i,sep="")
  #url <- paste(url,"&ref_=adv_nxt",sep="")
  #print (url)
  web <- read_html(i)
  
  totalcontent_html <- html_nodes(web,'.lister-item-content')
  totalcontent <- html_text(totalcontent_html)
  
  title_html <- html_nodes(web,'.lister-item-header a')
  title <- c(title,html_text(title_html))
  
  rank_html <- html_nodes(web,'.text-primary')
  rank_data <- html_text(rank_html)
  rank <- c(rank,as.numeric(rank_data))
  
  year_html <- html_nodes(web,'.text-muted.unbold')
  year_data <- html_text(year_html)
  year_data <- gsub("\\(|\\)","",gsub("I","",year_data))
  year <- c(year,as.numeric(year_data))
  
  rating_tab <- gsub("Rate this.*","",totalcontent)
  rating_data <- gsub("Director.*","",gsub("Star.*","",rating_tab))
  rating_data <- gsub(".*min","",gsub(".*\\|","",rating_data))
  rating_data <- gsub(".*2009","",rating_data)
  rating_data <- substring(gsub("[^0-9\\.]", "", rating_data),1,3)
  rating <- c(rating,as.numeric(rating_data))
  
  # directors_tab <- gsub(".*Director:","",gsub(".*Directors:","",totalcontent))
  # directors_tab <- gsub("Votes.*","",gsub("Gross.*","",directors_tab))
  directors_tab <- html_text(html_nodes(web,'.text-muted~ .text-muted+ p'))
  directors_tab <- gsub("\n","",gsub(" ","",directors_tab))
  directors_data <- gsub("\\|","",gsub("Star.*","",directors_tab))
  #directors_data <- gsub(",.*","",directors_data)
  directors_data <- gsub(".*Director:","",gsub(".*Directors:","",directors_data))
  directors <- c(directors,(directors_data))
  
  actors_data <- substring(gsub("Star:","                                                          ",gsub("Stars:","                                                          ",directors_tab)),60)
  actors_data <- gsub(" ","",actors_data)
  actors <- c(actors,(actors_data))
 
  genre_tab <- gsub("Rate.*","",totalcontent)
  genre_tab<- gsub("\n","                    ",genre_tab)# 20 spaces
  
  genre_tab <- gsub(" ","",substring(genre_tab,195))
  genre_tab <- gsub("Director:.*","",gsub(".*Directors:.*","",gsub("Star:.*","",gsub("Stars:.*","",genre_tab))))
  genre_tab <- substring(genre_tab,1,length(genre_tab)-3)
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
  
  
  description_data <- gsub(".*/10","",totalcontent)
  description_data <- gsub("Director.*","",gsub("Stars.*","",description_data))
  description_data <- gsub("\\.\\.\\..*","...",description_data)
  description_data <- substring(gsub("\n","",description_data),2)
  description <- c(description,gsub("  ","",description_data))
  
  votes_data <- gsub(".*Votes:","",gsub("\n","        ",totalcontent))
  votes <- c(votes,as.numeric(gsub(",","",(gsub(" ","",gsub("\\|.*","",votes_data))))))
}


movies_new <- data.frame(Rank=rank,Title=title,Year=year,Rating=rating,Description=description,Directors=directors,Actors=actors,
                         Certificate=certi,Genre=genre,Time_of_Movie=time,Votes=votes)


