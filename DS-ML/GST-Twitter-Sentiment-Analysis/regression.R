library(RSQLite)
setwd("C:/Users/subashnirmal/Documents/")

db <- dbConnect(SQLite(),dbname='data.sqlite')
e_gross=c()

gross <- dbGetQuery(db,"select Gross from Final_data1")
actor_wt <- dbGetQuery(db,"select a_Value from Final_data1")
director_wt <- dbGetQuery(db,"select d_Value from Final_data1")
production_wt <- dbGetQuery(db,"select p_Value from Final_data1")
genre_wt <- dbGetQuery(db,"select g_Value from Final_data1")

gross <- gross$Gross
actor_wt <- actor_wt$a_Value
director_wt <- director_wt$d_Value
production_wt <- production_wt$p_Value
genre_wt <- genre_wt$g_Value

reg <- lm(gross~actor_wt+director_wt+production_wt+genre_wt)  
#Adj R2 = .4557

#remove outliars
rem_outliars <- function(var) {
qnt <- quantile(var, probs=c(.24, .76))
H <- 1.5 * IQR(var)
var1 <- var
var1[var < (qnt[1] - H)] <- qnt[1]
var1[var > (qnt[2] + H)] <- qnt[2]
var1
}

actor_wt1 <- rem_outliars(actor_wt)
director_wt1 <- rem_outliars(director_wt)
production_wt1 <- rem_outliars(production_wt)
genre_wt1 <- rem_outliars(genre_wt)
gross1 <- rem_outliars(gross)

outliar_reg <- lm(gross1~actor_wt1+director_wt1+production_wt1+genre_wt1)
#Adj R2 remove outliars = .5261
#Adj R2 adjust outliars = .5406

data <- data.frame(gross1,actor_wt1,director_wt1,production_wt1,genre_wt1)
library(MASS)
boxcox(gross1~., data = data, lambda = seq(-0.25, 0.25,length = 100))


log_actor_wt <- actor_wt1
log_director_wt <- director_wt1
log_production_wt <- production_wt1
log_genre_wt <- genre_wt1
for (i in 1:length(actor_wt1)){
  if (actor_wt1[i]!=0 && !(is.na(actor_wt1[i]))){
    log_actor_wt[i] <- log(actor_wt1[i])
  }
  if (director_wt1[i]!=0 && !(is.na(director_wt1[i]))){
    log_director_wt[i] <- log(director_wt1[i])
  }
  if (production_wt1[i]!=0 && !(is.na(production_wt1[i]))){
    log_production_wt[i] <- log(production_wt1[i])
  }
  if (genre_wt1[i]!=0 && !(is.na(genre_wt1[i]))){
    log_genre_wt[i] <- log(genre_wt1[i])
  }
}

boxcox_reg <- lm((gross1**.36-1)/.36~actor_wt1+director_wt1+production_wt1+genre_wt1 )
summary(boxcox_reg) 
#Adj R2 remove outliars = .6043, lambda=.4
#Adj R2 adjust outliars = .633
blog_reg <- lm((gross1**.4-1)/.4~log_actor_wt+log_director_wt+log_production_wt+log_genre_wt )
summary(blog_reg)
#Adj R2 remove outliars = .3899
#Adj R2 adjust outliars = .5134

data <- data.frame(Movies=movies,Gross=gross,Exp_gross=e_gross)