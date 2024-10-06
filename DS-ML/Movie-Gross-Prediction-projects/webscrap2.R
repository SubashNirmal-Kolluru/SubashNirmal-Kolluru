Sys.setenv(http_proxy="http://@10.3.100.207:8080")

library('rvest')
library('ggplot2')
url <- "http://www.imdb.com/search/title?count=500&release_date=2016,2016&title_type=feature"
web <- read_html(url)

rank_html <- html_nodes(web,'.text-primary')
rank <- html_text(rank_html)
rank <- as.numeric(gsub(",","",rank))

title_html <- html_nodes(web,'.lister-item-header a')
title <- html_text(title_html)

description <- html_text(html_nodes(web,'.ratings-bar+ .text-muted'))
description <- gsub("\n","",description)

runtime <- html_text(html_nodes(web,'.text-muted .runtime'))
runtime <- gsub("min","",runtime)
runtime <- as.numeric(runtime)

genre <- gsub("\n","",html_text(html_nodes(web,'.genre')))
genre <- gsub(" ","",genre)
genre <- gsub(",.*","",genre)
genre <- as.factor(genre)

rating <- as.numeric(html_text(html_nodes(web,'.ratings-imdb-rating strong')))

votes <- as.numeric(gsub(",","",html_text(html_nodes(web,'.sort-num_votes-visible span:nth-child(2)'))))

directors_tab <- html_text(html_nodes(web,'.text-muted+ p'))
directors_tab <- gsub("\n","",gsub(" ","",directors_tab))
directors <- gsub("\\|","",gsub("Stars.*","",directors_tab))
directors <- gsub(",.*","",directors)
directors <- gsub("Director:","",gsub("Directors:","",directors))
directors <- as.factor(directors)

actors <- substring(gsub("Stars:","                                                          ",directors_tab),60)
actors <- gsub(",.*","",actors)
actors <- gsub(" ","",actors)
actors <- as.factor(actors)

metascore_html <- html_nodes(web,'.ratings-bar')
metascore <- gsub("\n","",html_text(metascore_html))
metascore <- as.numeric(gsub(" ","",substring(metascore,210,250)))     #vector


gross_tab <- html_text(html_nodes(web,'.sort-num_votes-visible'))
gross <- gsub("\n","",gsub(" ","",gross_tab))
gross <- substring(gross,15)
gross <- gsub("G","",gsub("r","",gsub("o","",gsub("s","",gsub("M","",gross)))))
gross <- substring(gross,3)
gross <- as.numeric(gross)


movies <- data.frame(Rank=rank,Title=title,Description=description,Runtime=runtime,Genre=genre,Rating=rating,Votes=votes,
                     Directors=directors,Actors=actors,Metascore=metascore,Gross_Earnings_in_Millions=gross)

qplot(data = movies,Runtime,fill = Genre,bins = 30)
ggplot(movies) +aes(x = Genre, fill = Genre) +geom_bar()
qplot(data=movies,Rank,fill=Genre,bins = 30)
qplot(data=movies,Directors,fill=Genre,bins = 30)
ggplot(movies,aes(x=Runtime,y=Rating))+geom_point(aes(size=Votes,col=Genre))
ggplot(movies,aes(x=Runtime,y=Gross_Earnings_in_Millions))+geom_point(aes(size=Rating,col=Genre))
ggplot(movies,aes(x=Rating,y=Gross_Earnings_in_Millions))+geom_point(aes(size=Runtime,col=Genre))
ggplot(movies,aes(x=Metascore,y=Gross_Earnings_in_Millions))+geom_point(aes(size=Runtime,col=Genre))
ggplot(movies) +aes(x =Rank, y = Rating) +geom_point()
ggplot(movies) +aes(x = Votes, y = Rating) +geom_point(colour = 'deeppink3', alpha = 0.2)
ggplot(movies) +aes(x = Votes, y = Gross_Earnings_in_Millions) +geom_point(colour = 'blue')
ggplot(movies) +aes(x = Votes, y = Gross_Earnings_in_Millions, color = Genre) +geom_point()
ggplot(movies) +aes(x = Votes, y = Genre, color = Genre) +geom_point()
ggplot(movies) +aes(x = Genre, y = Votes, color = Genre) +geom_point()
ggplot(movies) +aes(x = Genre, y = Gross_Earnings_in_Millions, color = Genre) +geom_point()
ggplot(movies) +aes(x = Genre, y = Runtime, color = Genre) +geom_point()