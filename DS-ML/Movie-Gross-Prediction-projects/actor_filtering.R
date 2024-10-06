library(RSQLite)
library(plyr)

db <- dbConnect(SQLite(),dbname='data.sqlite')
movies <- dbGetQuery(db,"select Title from Actors_Beta")
year <- dbGetQuery(db,"select Year from Actors_Beta")
ratings <- dbGetQuery(db,"select Rating from Actors_Beta")
genre <- dbGetQuery(db,"select Genre from Actors_Beta")
actors <- dbGetQuery(db,"select Actors from Actors_Beta")
gross <- dbGetQuery(db,"select Gross_Collection from Actors_Beta")
cri_rating <- dbGetQuery(db,"select Critics_Rating from Actors_Beta")
votes <- dbGetQuery(db,"select Votes from Actors_Beta")
day_coll <- dbGetQuery(db,"select Opening_Day_Collection from Actors_Beta")
weekend_coll <- dbGetQuery(db,"select Opening_Weekend_Collection from Actors_Beta")
week_coll <- dbGetQuery(db,"select First_Week_Collection from Actors_Beta")

year <- year$Year
ratings <- ratings$Rating
genre <- genre$Genre
gross <- gross$Gross_Collection
cri_rating <- cri_rating$Critics_Rating
votes <- votes$Votes
day_coll <- day_coll$Opening_Day_Collection
weekend_coll <- weekend_coll$Opening_Weekend_Collection
week_coll <- week_coll$First_Week_Collection
actors <- actors$Actors
movies <- movies$Title

gross[is.na(gross)] <- 0
cri_rating[is.na(cri_rating)] <- 0
weekend_coll[is.na(weekend_coll)] <- 0
week_coll[is.na(week_coll)] <- 0
day_coll[is.na(day_coll)] <- 0
mov=c()

rev_data <- data.frame(Actors=actors,Title=movies,Year=year,Rating=ratings,Votes=votes,Genre=genre,Critics_Rating=cri_rating,Gross=gross,
                        Opening_Day_Collection=day_coll,Opening_Weekend_Collection=weekend_coll,
                        First_Week_Collection=week_coll)

rev_data <- ddply(rev_data, .(Actors,Title,Year,Rating,Votes,Genre), summarize,Gross = sum(Gross),Critics_Rating=sum(Critics_Rating),
                  Opening_Day_Collection=sum(Opening_Day_Collection),Opening_Weekend_Collection=sum(Opening_Weekend_Collection),
                  First_Week_Collection=sum(First_Week_Collection))

db <- dbConnect(SQLite(),dbname='data.sqlite')
dbWriteTable(db,'Actors_Beta2',rev_data,overwrite=TRUE)