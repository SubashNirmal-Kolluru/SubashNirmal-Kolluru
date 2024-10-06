library(RSQLite)
library(rvest)

f_budget <- c()
db <- dbConnect(SQLite(),dbname='data.sqlite')
budget <- dbGetQuery(db,"select Budget from Actors")
movies <- dbGetQuery(db,"select Title from Actors")
data <- dbGetQuery(db,"select * from Actors")
budget_tab <- gsub(",","",unlist(budget))
for (i in budget_tab){
  if(grepl('INR',i)){
    f_budget <- c(f_budget,as.numeric(gsub("[^0-9]","",i)))
  }else if(grepl('\\$',i)){
    f_budget <- c(f_budget,as.numeric(gsub("\\$","",i))*64.39)
  }else if(grepl('£',i)){
    f_budget <- c(f_budget,as.numeric(gsub("£","",i))*82.10)
  }else{
    f_budget <- c(f_budget,0)
  }
}

budget_data <- data.frame(f_budget)
budget_data <- cbind(data,f_budget)

db <- dbConnect(SQLite(),dbname='data.sqlite')
dbWriteTable(db,'Actors_Beta',budget_data,overwrite=TRUE)