#set working directory
setwd("C:/Users/subashnirmal/Desktop/subash/studies/AMSM2/project")
library(ggplot2)
#Load Datasets
# train <- read.csv("final_data.csv")
# #cheking dimensions
# dim(train)
# str(train)
# summary(train)
# #plotting data for insight
# #ggplot(train, aes(x= Avg_actual_price, y = Actual_price)) + geom_point(size = 2.5, color="navy") + xlab("Avg_actual_price") + ylab("Actual_price") + ggtitle("avg_past_price vs present_price")
# 
# 
# 
# #data_preprocessing
# str(train)
# train$Age<-as.integer(train$Age)
# train$Highest.Score.<-gsub("\\*","",train$Highest.Score.)
# train$Highest.Score..1<-gsub("\\*","",train$Highest.Score..1)
# train$Highest.Score..2<-gsub("\\*","",train$Highest.Score..2)
# train$Highest.Score..3<-gsub("\\*","",train$Highest.Score..3)
# train$Highest.Score.<-as.integer(train$Highest.Score.)
# train$Highest.Score..1<-as.integer(train$Highest.Score..1)
# train$Highest.Score..2<-as.integer(train$Highest.Score..2)
# train$Highest.Score..3<-as.integer(train$Highest.Score..3)
# train$Average.<-as.numeric(train$Average.)
# train$Average..1<-as.numeric(train$Average..1)
# train$Average..2<-as.numeric(train$Average..2)
# train$Average..3<-as.numeric(train$Average..3)
# train$Average..4<-as.numeric(train$Average..4)
# train$Average..5<-as.numeric(train$Average..5)
# train$Average..6<-as.numeric(train$Average..6)
# train$Average..7<-as.numeric(train$Average..7)
# train$Strike.Rate.<-as.numeric(train$Strike.Rate.)
# train$BatSkill<-as.numeric(train$BatSkill)
# train$BallSkill<-as.numeric(train$BallSkill)
# 
# train$Best...Innings.<-NULL
# train$Best...Match.<-NULL
# train$Best.<-NULL
# train$Best..1<-NULL
# train$Best..2<-NULL
# train$PlayerName<-NULL
# train$DateofBirth<-NULL
# #dealing with missing values
# train[is.na(train)] <- 0
# #fitting_linear_model
# linear_model <- lm(Actual_price ~ ., data = train)
# summary(linear_model)
# write.csv(train,file="delete.csv")
# 
# cormat <- round(cor(train),2)
# head(cormat)
# 
# # Get lower triangle of the correlation matrix
# get_lower_tri<-function(cormat){
#   cormat[upper.tri(cormat)] <- NA
#   return(cormat)
# }
# # Get upper triangle of the correlation matrix
# get_upper_tri <- function(cormat){
#   cormat[lower.tri(cormat)]<- NA
#   return(cormat)
# }
# upper_tri <- get_upper_tri(cormat)
# upper_tri
# 
# # Melt the correlation matrix
# library(reshape2)
# melted_cormat <- melt(upper_tri, na.rm = TRUE)
# # Heatmap
# library(ggplot2)
# ggplot(data = melted_cormat, aes(Var2, Var1, fill = value))+
#   geom_tile(color = "white")+
#   scale_fill_gradient2(low = "blue", high = "red", mid = "white", 
#                        midpoint = 0, limit = c(-1,1), space = "Lab", 
#                        name="Pearson\nCorrelation") +
#   theme_minimal()+ 
#   theme(axis.text.x = element_text(angle = 45, vjust = 1, 
#                                    size = 12, hjust = 1))+
#   coord_fixed()
# 
# numi=c()
# numj=c()
# for(i in 1:nrow(cormat)){
#   for(j in 1:ncol(cormat)){
#     if(is.na(cormat[i,j])==TRUE){
#       cormat[i,j]=0
#     }
#     if (cormat[i,j]>.95 && i<j){
#       numi <- c(numi,i)
#       numj <- c(numj,j)
#     }
#   }
# }
# cluster <- data.frame(numi,numj)
train1 <- read.csv("train1.csv")
dim(train1)
str(train1)
#fitting_linear_model
linear_model <- lm(Actual_price ~ ., data = train1)
summary(linear_model)



# Linear Model Selction and Regularization
# Ref Source: An intrduction to Statistical Learning (Springer)
library(MASS)
library(ISLR)
#install.packages("glmnet")
library(glmnet)
#install.packages("leaps")
library(leaps)

# Regular Lin Model 
myregress=lm (Actual_price~.,train1)
step <- stepAIC(myregress, direction="both")
# regsubsets performs best subset selection 
# regfit.full=regsubsets (Actual_price~.,train1,really.big=TRUE)
# summary(regfit.full)
# 
# # default 8 variable model
# # use nvmax 
# regfit.full=regsubsets (Actual_price~.,data=train1 ,nvmax=25,really.big=TRUE)
# reg.summary =summary (regfit.full)
# names(reg.summary)
# reg.summary$rsq
# 
# # R-sq 32%-54%
# # plotting Rss, R-adj, Cp, and BIC
# par(mfrow=c(2,2))
# plot(reg.summary$rss ,xlab="Number of Variables ",ylab="RSS", type="l")
# which.min(reg.summary$rss)
# points (19,reg.summary$rss[19], col="red",cex=2,pch =20)
# plot(reg.summary$adjr2,xlab="Number of Variables ",ylab="Adjusted RSq",type="l")
# which.max(reg.summary$adjr2)
# points (11,reg.summary$adjr2[11], col="red",cex=2,pch =20)
# plot(reg.summary$cp ,xlab="Number of Variables ",ylab="Cp", type="l")
# which.min(reg.summary$cp )
# points (10,reg.summary$cp [10], col ="red",cex=2,pch =20)
# which.min(reg.summary$bic )
# plot(reg.summary$bic ,xlab="Number of Variables ",ylab="BIC",  type="l")
# points (6,reg.summary$bic [6],col="red",cex=2,pch =20)
# 
# #regsubset inbuilt plot function 
# plot(regfit.full ,scale="r2")
# plot(regfit.full ,scale="adjr2")
# plot(regfit.full ,scale="Cp")
# plot(regfit.full ,scale="bic")

#Six variable model with lowest BIC (compare with StepAIC model)
coef(regfit.full ,6)


#Forward and Backward Stepwise Selection
# can choose best one variable model, best 2 variable model and so on 
regfit.fwd=regsubsets(Actual_price~.,data=train1 , nvmax=83, method ="forward")
reg.summary =summary (regfit.fwd)
names(reg.summary)
reg.summary$rsq

# R-sq 32%-54%
# plotting Rss, R-adj, Cp, and BIC
par(mfrow=c(2,2))
plot(reg.summary$rss ,xlab="Number of Variables ",ylab="RSS", type="l")
which.min(reg.summary$rss)
points (47,reg.summary$rss[47], col="red",cex=2,pch =20)
plot(reg.summary$adjr2,xlab="Number of Variables ",ylab="Adjusted RSq",type="l")
which.max(reg.summary$adjr2)
points (46,reg.summary$adjr2[46], col="red",cex=2,pch =20)
plot(reg.summary$cp ,xlab="Number of Variables ",ylab="Cp", type="l")
which.min(reg.summary$cp )
points (10,reg.summary$cp [10], col ="red",cex=2,pch =20)
which.min(reg.summary$bic )
plot(reg.summary$bic ,xlab="Number of Variables ",ylab="BIC",  type="l")
points (47,reg.summary$bic [47],col="red",cex=2,pch =20)
which.min(reg.summary$aic )
plot(reg.summary$aic ,xlab="Number of Variables ",ylab="BIC",  type="l")
points (47,reg.summary$bic [47],col="red",cex=2,pch =20)

regfit.bwd=regsubsets(Actual_price~.,data=train1 , nvmax=83, method ="backward")
summary (regfit.bwd)
reg.summary =summary (regfit.bwd)
names(reg.summary)
reg.summary$rsq

# R-sq 32%-54%
# plotting Rss, R-adj, Cp, and BIC
par(mfrow=c(2,2))
plot(reg.summary$rss ,xlab="Number of Variables ",ylab="RSS", type="l")
which.min(reg.summary$rss)
points (47,reg.summary$rss[47], col="red",cex=2,pch =20)
plot(reg.summary$adjr2,xlab="Number of Variables ",ylab="Adjusted RSq",type="l")
which.max(reg.summary$adjr2)
points (46,reg.summary$adjr2[46], col="red",cex=2,pch =20)
plot(reg.summary$cp ,xlab="Number of Variables ",ylab="Cp", type="l")
which.min(reg.summary$cp )
points (10,reg.summary$cp [10], col ="red",cex=2,pch =20)
which.min(reg.summary$bic )
plot(reg.summary$bic ,xlab="Number of Variables ",ylab="BIC",  type="l")
points (47,reg.summary$bic [47],col="red",cex=2,pch =20)
which.min(reg.summary$aic )
plot(reg.summary$aic ,xlab="Number of Variables ",ylab="BIC",  type="l")
points (47,reg.summary$bic [47],col="red",cex=2,pch =20)

coef(regfit.fwd ,47)
coef(regfit.bwd ,47)

#Choosing Among Models Using the Validation Set Approach and Cross-Validation
set.seed(1)
trains=sample(c(TRUE ,FALSE), nrow(train1),rep=TRUE)
test=(!trains)
regfit.best=regsubsets (Actual_price~.,data=train1[trains ,], nvmax=47, method ="forward")
test.mat=model.matrix(Actual_price~.,data=train1[test ,])
val.errors =rep(NA ,47)
for(i in 1:47){
  coefi=coef(regfit.best ,id=i)
  pred=test.mat[,names(coefi)]%*%coefi
  val.errors[i]=mean(( train1$Actual_price[test]-pred)^2)
}
val.errors
which.min(val.errors)
#best model contains 47 variables 
coef(regfit.best ,47)
predict.regsubsets =function (object , newdata ,id ,...){
  form=as.formula (object$call [[2]])
  mat=model.matrix(form ,newdata )
  coefi=coef(object ,id=id)
  xvars=names(coefi)
  mat[,xvars]%*%coefi
}

#perform best subset selection using complete data
regfit.best=regsubsets (Actual_price~.,data=train1 ,nvmax=81,method="forward")
coef(regfit.best ,47)
# Best 47 variable model on full dataset has a different set of variables than just on training set 

#k-fold cross valiadation to chose among the models of different size 
k=10
set.seed(1)
folds=sample (1:k,nrow(train1),replace=TRUE)
cv.errors =matrix (NA,k,47, dimnames =list(NULL , paste (1:47) ))

for(j in 1:k){ 
  best.fit=regsubsets (Actual_price~.,data=train1 [folds!=j,], nvmax=47,method="forward")
  for(i in 1:47){
    pred=predict (best.fit ,train1 [folds ==j,],id=i)
    cv.errors[j,i]= mean( ( train1$Actual_price[ folds==j]-pred)^2)
  }
}
mean.cv.errors=apply(cv.errors ,2, mean)
mean.cv.errors
par(mfrow=c(1,1))
plot(mean.cv.errors ,type="b")
# reg.best=regsubsets (Actual_price~.,data=train1 , nvmax=19)
# chosses 11 variable model 
#coef(reg.best ,11)

#Ridge Regression 
# requires data to be defined as x and y using glmnet
x=model.matrix(Actual_price~.,train1 )[,-1]
y=train1$Actual_price

grid=10^seq(10,-2, length =100)
ridge.mod=glmnet (x,y,alpha=0, lambda=grid) #alpho = 0 ridge regression, alpha=1 lasso model 
dim(coef(ridge.mod))
#higher lambda value
ridge.mod$lambda [50]
#Coeff
coef(ridge.mod)[ ,50]
sqrt(sum(coef(ridge.mod)[-1,50]^2) )
#COmpare at smaller lambda value 
ridge.mod$lambda [60]
coef(ridge.mod)[ ,60]
sqrt(sum(coef(ridge.mod)[-1,60]^2) )
# trying at different lambda with predict function 
predict (ridge.mod ,s=50,type="coefficients") [1:83,]
# split trainig-testing set
set.seed(1)
train=sample (1: nrow(x), nrow(x)/2)
test=(-train)
y.test=y[test]
ridge.mod=glmnet(x[train ,],y[ train],alpha=0, lambda =grid, thresh =1e-12)
ridge.pred=predict (ridge.mod ,s=4, newx=x[test ,]) #at lambda =4 
mean((ridge.pred -y.test)^2)
mean((mean(y[train])-y.test)^2)
ridge.pred=predict (ridge.mod ,s=1e10 ,newx=x[test ,])
mean((ridge.pred -y.test)^2)
ridge.pred=predict (ridge.mod ,s=0, newx=x[test ,])#, exact=T)
mean((ridge.pred -y.test)^2)
lm(y~x, subset=train)
predict (ridge.mod,s=0,type="coefficients")[1:83,]
set.seed(1)
cv.out=cv.glmnet(x[train ,],y[ train],alpha=0)
plot(cv.out)
bestlam =cv.out$lambda.min
bestlam
ridge.pred=predict (ridge.mod ,s=bestlam ,newx=x[test ,])
mean((ridge.pred -y.test)^2)
out=glmnet(x,y,alpha=0)
predict (out ,type="coefficients",s= bestlam) [1:83,]
#Lasso
lasso.mod=glmnet(x[train ,],y[ train],alpha=1, lambda =grid)
plot(lasso.mod)
set.seed(1)
cv.out=cv.glmnet(x[train ,],y[ train],alpha=1)
plot(cv.out)
bestlam =cv.out$lambda.min
lasso.pred=predict (lasso.mod ,s=bestlam ,newx=x[test ,])
mean((lasso.pred -y.test)^2)
out=glmnet (x,y,alpha=1, lambda=grid)
lasso.coef=predict (out ,type="coefficients",s= bestlam) [1:83,]
lasso.coef
lasso.coef[lasso.coef!=0]
#PCR
library (pls)
set.seed(2)
pcr.fit=pcr(Actual_price~., data=train1 , scale=TRUE , validation ="CV")
summary (pcr.fit)
validationplot(pcr.fit ,val.type="MSEP")
set.seed(1)
pcr.fit=pcr(Actual_price~., data=train1 , subset=train ,scale=TRUE , validation ="CV")
validationplot(pcr.fit ,val.type="AIC")
pcr.fit=pcr(y~x,scale=TRUE ,ncomp=42)
summary (pcr.fit)
#PLS
set.seed(1)
pls.fit=plsr(Actual_price~., data=train1 , subset=train , scale=TRUE , validation ="CV")
summary (pls.fit)
pls.pred=predict (pls.fit ,train1[test ,],ncomp =18)
mean((pls.pred-y.test)^2)
pls.fit=plsr(Actual_price~., data=train1 , scale=TRUE , ncomp=18)
summary (pls.fit)
names(summary (pls.fit))
