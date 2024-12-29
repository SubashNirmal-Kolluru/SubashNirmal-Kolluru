library(RSQLite)
library(plyr)
library(data.table)

n_movies <- c()
g_movies <- c()
t_wt <- c()
dir_data <- data.frame(Production=c(),Rating=c(),Votes=c(),Rev_score=c(),Budget=c(),Gross=c(),Critics_Rating=c())

db <- dbConnect(SQLite(),dbname='data.sqlite')
#movies <- dbGetQuery(db,"select Title from Actors_Beta")
ratings <- dbGetQuery(db,"select Rating from Actors_Beta")
#directors <- dbGetQuery(db,"select Directors from Actors_Beta")
gross <- dbGetQuery(db,"select Gross_Collection from Actors_Beta")
cri_rating <- dbGetQuery(db,"select Critics_Rating from Actors_Beta")
votes <- dbGetQuery(db,"select Votes from Actors_Beta")
sen_score <- dbGetQuery(db,"select Score from Actors_Beta")
budget <- dbGetQuery(db,"select f_budget from Actors_Beta")
production <- dbGetQuery(db,"select Production from Actors_Beta")
#year <- dbGetQuery(db,"select Year from Actors_Beta")


production <- production$Production
ratings <- ratings$Rating
gross <- gross$Gross_Collection
cri_rating <- cri_rating$Critics_Rating
votes <- votes$Votes
#directors <- directors$Directors
sen_score <- as.numeric(sen_score$Score)
budget <- budget$f_budget
# movies <- movies$Title
# year <- year$Year

gross[is.na(gross)] <- 0
cri_rating[is.na(cri_rating)] <- 0
ratings[is.na(ratings)] <- 0
votes[is.na(votes)] <- 0

for (i in 1:length(production)){
  production1 <- strsplit(production[i],",")
  production1 <- unlist(production1)
  for (j in production1){
    dir_data1 <- data.frame(Production=j,Rating=ratings[i],Votes=votes[i],Rev_score=sen_score[i],Budget=budget[i],Gross=gross[i]
                            ,Critics_Rating=cri_rating[i])
    dir_data <- rbind(dir_data,dir_data1)
  }
}

dir_data <- ddply(dir_data, .(Production,Rating,Votes,Rev_score,Budget), summarize,Gross = sum(Gross),
                  Critics_Rating=sum(Critics_Rating))

production <- unlist(dir_data[1])
gross <- unlist(dir_data[6])
for (j in production){
  n_movies <- c(n_movies,length(production[production==j]))
}
for (i in 1:length(production)){
  g_movies <- c(g_movies,gross[i]/n_movies[i])
}

production <- unlist(dir_data[1])
ratings <- unlist(dir_data[2])
votes <- unlist(dir_data[3])
rev_score <- as.numeric(unlist(dir_data[4]))
budget <- unlist(dir_data[5])
gross <- unlist(dir_data[6])
cri_rating <- unlist(dir_data[7])


dir_data <- data.frame(Production=production,No_movies=n_movies,Rating=ratings,Votes=votes,Rev_score=rev_score,Budget=budget,Gross=gross
                       ,Critics_Rating=cri_rating,Grossp_movie=g_movies)

dir_data <- ddply(dir_data, .(Production,No_movies), summarize,Rating=sum(Rating),Votes=sum(Votes),Rev_score=sum(Rev_score),Budget=sum(Budget),
                  Gross = sum(Gross),Critics_Rating=sum(Critics_Rating),Grossp_movie=sum(Grossp_movie))

db <- dbConnect(SQLite(),dbname='data.sqlite')
dbWriteTable(db,'Production_Beta2',dir_data,overwrite=TRUE)


production <- unlist(dir_data[1])
n_movies <- unlist(dir_data[2])
ratings <- unlist(dir_data[3])
votes <- unlist(dir_data[4])
rev_score <- as.numeric(unlist(dir_data[5]))
budget <- unlist(dir_data[6])
gross <- unlist(dir_data[7])
cri_rating <- unlist(dir_data[8])
g_movies <- unlist(dir_data[9])

m_ratings <- max(ratings)
m_votes <- max(votes)
m_rev_score <- max(rev_score)
m_budget <- max(budget)
m_gross <- max(gross)
m_cri_rating <- max(cri_rating)
m_n_movies <- max(n_movies)
m_g_movies <- max(g_movies)

for (i in 1:length(ratings)){
  ratings[i] <- ratings[i]*10/m_ratings
}
for (i in 1:length(votes)){
  votes[i] <- votes[i]*10/m_votes
}
for (i in 1:length(rev_score)){
  rev_score[i] <- rev_score[i]*10/m_rev_score
}
for (i in 1:length(budget)){
  budget[i] <- budget[i]*10/m_budget
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
for (i in 1:length(g_movies)){
  g_movies[i] <- g_movies[i]*10/m_g_movies
}


dir_data2 <- data.frame(Production=production,No_movies=n_movies1,Rating=ratings,Votes=votes,Rev_score=rev_score,Budget=budget,Gross=gross
                        ,Critics_Rating=cri_rating,Grossp_movie=g_movies)


wt <- c(.19667,.08343,.03645,.27785,.13871,.04952,.03453,.16)
dir_data3 <- data.frame(Production=c(),Weightage=c())
for (i in 1:length(production)){
  if (n_movies[i]>3){
    t_wt <- wt[1]*ratings[i]+wt[2]*votes[i]+wt[3]*rev_score[i]+wt[4]*budget[i]+wt[5]*gross[i]+wt[6]*cri_rating[i]+(wt[7]+wt[8])*g_movies[i]
    dir_data1 <- data.frame(Production=production[i],Weightage=t_wt)
    dir_data3 <- rbind(dir_data3,dir_data1)
  }
}

DT <- as.data.table(dir_data3)
production_rank <- DT[,ProductionRank:=rank(-Weightage,ties.method="first"),]

dbWriteTable(db,'Production_ranking',production_rank,overwrite=TRUE)