Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library('rvest')

title = c()
director_rating=c()
dialogue_rating=c()
story_rating=c()
music_rating=c()
action_rating=c()
visual_rating=c()

month <- c(12:1)
year <- c(2013)
for (a in year){
  for (b in month){
    if (b == 12 && a == 2013){
      url <- "http://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/moviearticlelistdatewise1/2742919.cms?query=*:*&startdate=2013-12-01&enddate=2013-12-31&sectionid=2742919"
    }
    else {
      url <- paste("http://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/moviearticlelistdatewise1/2742919.cms?query=*:*&startdate=",a,"-",b,"-01&enddate=",syear,"-",smonth,"-01&sectionid=2742919",sep="")
    }
    print (url)
    web <- read_html(url)
    
    ratings_tab=c()
    ratings=c()
    title1 <- gsub("\n","",html_text(html_nodes(web,".mr_listing_right a")))
    title <- c(title,title1)
    for (i in title1){
      if(i=="X: Past Is Present"||i=="I"||i=="Take It Easy"||i=="Main Aur Mr. Riight"||i=="Badlapur Boys"||i=="A Decent Arrangement"
         ||i=="Desi Kattey"||i=="Entertainment"||i=="W"){
        ratings_tab <- c(ratings_tab,"")
        next
      }
      h <- html_session(url) %>% follow_link(i)
      ratings_tab <- c(ratings_tab,html_text(html_nodes(h,"#storydiv")))
      
    }
    for (r in ratings_tab){
      if(grepl("In-depth Analysis",r)){
        ratings <- c(ratings,gsub(".*sub scores below.","",gsub(".*In-depth Analysis","",r)))
      }else{
        ratings <- c(ratings,"")
      }
    }
    for (j in ratings){
      if(grepl("Direction",j)){
        director_rating <- c(director_rating,gsub("\\/.*","",gsub(".*Direction","",j)))
      }else{
        director_rating <- c(director_rating,"")
      }
      if(grepl("Dialogues",j)){
        dialogue_rating <- c(dialogue_rating,gsub("\\/.*","",gsub(".*Dialogues","",j)))
      }else{
        dialogue_rating <- c(dialogue_rating,"")
      }
      if(grepl("Story",j)){
        story_rating <- c(story_rating,gsub("\\/.*","",gsub(".*Story","",j)))
      }else{
        story_rating <- c(story_rating,"")
      }
      if(grepl("Music",j)){
        music_rating <- c(music_rating,gsub("\\/.*","",gsub(".*Music","",j)))
      }else{
        music_rating <- c(music_rating,"")
      }
      if(grepl("Action",j)){
        action_rating <- c(action_rating,gsub("\\/.*","",gsub(".*Action","",j)))
      }else{
        action_rating <- c(action_rating,"")
      }
      if(grepl("Visual appeal",j)){
        visual_rating <- c(visual_rating,gsub("\\/.*","",gsub(".*Visual appeal","",j)))
      }else{
        visual_rating <- c(visual_rating,"")
      }
    }
    
    smonth <- b
    syear <- a 
  }
}

director_rating=as.numeric(director_rating)
dialogue_rating=as.numeric(dialogue_rating)
story_rating=as.numeric(story_rating)
music_rating=as.numeric(music_rating)
action_rating=as.numeric(action_rating)
visual_rating=as.numeric(visual_rating)

toi_data <- data.frame(Title=title,Director_rating=director_rating,Dialogue_rating=dialogue_rating,Story_rating=story_rating
                       ,Music_rating=music_rating,Action_rating=action_rating,Visual_rating=visual_rating)
