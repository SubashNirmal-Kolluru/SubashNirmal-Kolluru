library(RSQLite)

db <- dbConnect(SQLite(),dbname='BTP_data.sqlite')
data <- dbGetQuery(db,"select * from Distance_matrix1")
p_data <- data.frame(point=1,data=0,x_co=0,y_co=0)

for (i in 3:length(data)){
  if(i==3){
      x=data[1,i]
      p_data=rbind(p_data,data.frame(point=i-1,data=0,x_co=x,y_co=0))
  }else{
      x=(data[1,3]**2-data[2,i]**2+data[1,i]**2)/(2*data[1,3])     #row starts with 1 and column starts with 2
      y=(data[1,i]**2-x**2)
      print
      p_data=rbind(p_data,data.frame(point=i-1,data=data[1,i],x_co=x,y_co=y))
  }
}