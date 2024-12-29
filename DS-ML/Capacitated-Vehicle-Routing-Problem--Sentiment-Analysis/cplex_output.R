library(plyr)
library(xlsx)

mat=array(0,dim=c(13,13,4))
#mat=array(0,dim=c(13,13))
data <- read.xlsx("BTP_output1.xlsx",sheetIndex = 1)
i_data <- as.numeric(unlist(data[1]))
j_data <- as.numeric(unlist(data[2]))
k_data <- as.numeric(unlist(data[3]))
#value <- as.numeric(unlist(data[4]))
value <- as.numeric(unlist(data[5]))
#testing
i_test <- ddply(data,.(i,k),summarize,Value=sum(Value))
j_test <- ddply(data,.(j,k),summarize,Value=sum(Value))
#i_test <- ddply(data,.(i),summarize,Value=sum(Value))
#j_test <- ddply(data,.(j),summarize,Value=sum(Value))


for(i in 1:length(i_data)){
  mat[i_data[i],j_data[i],k_data[i]]=value[i]
  #mat[i_data[i],j_data[i]]=value[i]
}

write.xlsx(mat, 'BTP_output2.xlsx', sheetName="Sheet1")

# for (k in k_data){
#   i=1
#   if()
# }