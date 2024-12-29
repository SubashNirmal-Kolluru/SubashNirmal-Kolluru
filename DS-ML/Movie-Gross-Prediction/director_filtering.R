library(RSQLite)
library(plyr)

db <- dbConnect(SQLite(),dbname='data.sqlite')
movies <- dbGetQuery(db,"select Title from Directors_Beta2")
year <- dbGetQuery(db,"select Year from Directors_Beta2")
ratings <- dbGetQuery(db,"select Rating from Directors_Beta2")
genre <- dbGetQuery(db,"select Genre from Directors_Beta2")
directors <- dbGetQuery(db,"select Directors from Directors_Beta2")
gross <- dbGetQuery(db,"select Gross_Collection from Directors_Beta2")
cri_rating <- dbGetQuery(db,"select Critics_Rating from Directors_Beta2")
votes <- dbGetQuery(db,"select Votes from Directors_Beta2")
day_coll <- dbGetQuery(db,"select Opening_Day_Collection from Directors_Beta2")
weekend_coll <- dbGetQuery(db,"select Opening_Weekend_Collection from Directors_Beta2")
week_coll <- dbGetQuery(db,"select First_Week_Collection from Directors_Beta2")
sen_score <- dbGetQuery(db,"select Score from Directors_Beta2")

year <- year$Year
ratings <- ratings$Rating
genre <- genre$Genre
gross <- gross$Gross_Collection
cri_rating <- cri_rating$Critics_Rating
votes <- votes$Votes
day_coll <- day_coll$Opening_Day_Collection
weekend_coll <- weekend_coll$Opening_Weekend_Collection
week_coll <- week_coll$First_Week_Collection
directors <- directors$Directors
movies <- movies$Title

gross[is.na(gross)] <- 0
cri_rating[is.na(cri_rating)] <- 0
weekend_coll[is.na(weekend_coll)] <- 0
week_coll[is.na(week_coll)] <- 0
day_coll[is.na(day_coll)] <- 0


dir_data <- data.frame(Directors=directors,Title=movies,Year=year,Rating=ratings,Votes=votes,Genre=genre,Critics_Rating=cri_rating,Gross=gross,
                       Opening_Day_Collection=day_coll,Opening_Weekend_Collection=weekend_coll,
                       First_Week_Collection=week_coll)

dir_data <- ddply(dir_data, .(Directors,Title,Year,Rating,Votes,Genre), summarize,Gross = sum(Gross),Critics_Rating=sum(Critics_Rating),
                  Opening_Day_Collection=sum(Opening_Day_Collection),Opening_Weekend_Collection=sum(Opening_Weekend_Collection),
                  First_Week_Collection=sum(First_Week_Collection))

db <- dbConnect(SQLite(),dbname='data.sqlite')
dbWriteTable(db,'Directors_Beta3',dir_data,overwrite=TRUE)