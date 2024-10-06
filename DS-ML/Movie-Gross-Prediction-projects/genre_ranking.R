library(RSQLite)
library(plyr)
library(rvest)
library(data.table)

n_movies <- c()
dir_data <- data.frame(Genre=c(),Rating=c(),Votes=c(),Rev_score=c(),Budget=c(),Gross=c(),Critics_Rating=c())

db <- dbConnect(SQLite(),dbname='data.sqlite')
ratings <- dbGetQuery(db,"select Rating from Actors_Beta")
genre <- dbGetQuery(db,"select Genre from Actors_Beta")
gross <- dbGetQuery(db,"select Gross_Collection from Actors_Beta")
cri_rating <- dbGetQuery(db,"select Critics_Rating from Actors_Beta")
votes <- dbGetQuery(db,"select Votes from Actors_Beta")
sen_score <- dbGetQuery(db,"select Score from Actors_Beta")


ratings <- ratings$Rating
gross <- gross$Gross_Collection
cri_rating <- cri_rating$Critics_Rating
votes <- votes$Votes
genre <- genre$Genre
genre <- gsub("\\.","",genre)
sen_score <- as.numeric(sen_score$Score)

gross[is.na(gross)] <- 0
cri_rating[is.na(cri_rating)] <- 0
ratings[is.na(ratings)] <- 0
votes[is.na(votes)] <- 0

for (i in 1:length(genre)){
  genre1 <- strsplit(genre[i],",")
  genre1 <- unlist(genre1)
  for (j in genre1){
    dir_data1 <- data.frame(Genre=j,Rating=ratings[i],Votes=votes[i],Rev_score=sen_score[i],Gross=gross[i]
                            ,Critics_Rating=cri_rating[i])
    dir_data <- rbind(dir_data,dir_data1)
  }
}

dir_data <- ddply(dir_data, .(Genre,Rating,Votes,Rev_score), summarize,Gross = sum(Gross),
                  Critics_Rating=sum(Critics_Rating))

genre <- unlist(dir_data[1])
for (j in genre){
  n_movies <- c(n_movies,length(genre[genre==j]))
}

genre <- unlist(dir_data[1])
ratings <- unlist(dir_data[2])
votes <- unlist(dir_data[3])
rev_score <- as.numeric(unlist(dir_data[4]))
gross <- unlist(dir_data[5])
cri_rating <- unlist(dir_data[6])


dir_data <- data.frame(Genre=genre,No_movies=n_movies,Rating=ratings,Votes=votes,Rev_score=rev_score,Gross=gross
                       ,Critics_Rating=cri_rating)

dir_data <- ddply(dir_data, .(Genre,No_movies), summarize,Rating=sum(Rating),Votes=sum(Votes),Rev_score=sum(Rev_score),
                  Gross = sum(Gross),Critics_Rating=sum(Critics_Rating))


db <- dbConnect(SQLite(),dbname='data.sqlite')
dbWriteTable(db,'genre_Beta',dir_data,overwrite=TRUE)

genre <- unlist(dir_data[1])
n_movies <- unlist(dir_data[2])
ratings <- unlist(dir_data[3])
votes <- unlist(dir_data[4])
rev_score <- as.numeric(unlist(dir_data[5]))
gross <- unlist(dir_data[6])
cri_rating <- unlist(dir_data[7])

m_ratings <- max(ratings)
m_votes <- max(votes)
m_rev_score <- max(rev_score)
m_gross <- max(gross)
m_cri_rating <- max(cri_rating)
m_n_movies <- max(n_movies)

for (i in 1:length(ratings)){
  ratings[i] <- ratings[i]*10/m_ratings
}
for (i in 1:length(votes)){
  votes[i] <- votes[i]*10/m_votes
}
for (i in 1:length(rev_score)){
  rev_score[i] <- rev_score[i]*10/m_rev_score
}
for (i in 1:length(gross)){
  gross[i] <- gross[i]*10/m_gross
}
for (i in 1:length(cri_rating)){
  cri_rating[i] <- cri_rating[i]*10/m_cri_rating
}
for (i in 1:length(n_movies)){
  n_movies1[i] <- n_movies[i]*10/m_n_movies
}

dir_data2 <- data.frame(Genre=genre,No_movies=n_movies1,Rating=ratings,Votes=votes,Rev_score=rev_score,Gross=gross
                        ,Critics_Rating=cri_rating)



wt <- c(.24667,.11343,.10645,.30785,.03871,.04952,.03453,.8)
dir_data3 <- data.frame(Genre=c(),Weightage=c())
for (i in 1:length(genre)){
  if (n_movies[i]>9){
  t_wt <- wt[1]*ratings[i]+wt[2]*votes[i]+wt[3]*rev_score[i]+wt[4]*gross[i]+(wt[5]+wt[6])*cri_rating[i]+(wt[7]+wt[8])*n_movies[i]
  dir_data1 <- data.frame(Genre=genre[i],Weightage=t_wt)
  dir_data3 <- rbind(dir_data3,dir_data1)
  }
}

DT <- as.data.table(dir_data3)
genre_rank <- DT[,GenreRank:=rank(-Weightage,ties.method="first"),]

dbWriteTable(db,'Genre_ranking',genre_rank,overwrite=TRUE)