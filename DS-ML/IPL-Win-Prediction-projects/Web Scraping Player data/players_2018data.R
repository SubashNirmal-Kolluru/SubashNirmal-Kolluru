Sys.setenv(http_proxy="http://@172.16.2.30:8080")

library(rvest)
table_s1=c()
table_s2=c()
table_s3=c()
table_u1=c()
table_u2=c()

  url <- "http://www.ipltickets.net/ipl-auction/"
web <- read_html(url)
data_sold <- html_text(html_nodes(web,'h2+ table td'))
data_unsold <- html_text(html_nodes(web,'h3+ table td'))
for (i in 1:length(data_sold)){
  if (i%%3==1){
    table_s1 <- c(table_s1,data_sold[i])
  }
  if (i%%3==2){
    table_s2 <- c(table_s2,data_sold[i])
  }
  if (i%%3==0){
    table_s3 <- c(table_s3,gsub("\\(.*","",data_sold[i]))
  }
}
for (i in 1:length(data_unsold)){
  if (i%%2==1){
    table_u1 <- c(table_u1,data_unsold[i])
  }
  if (i%%2==0){
    table_u2 <- c(table_u2,data_unsold[i])
  }
}
table_sold <- data.frame(Name=table_s1,Team=table_s2,Price=table_s3)
table_unsold <- data.frame(Name=table_s1,Base_Price=table_s3)

write.csv(table_sold,'Table_sold.csv')
write.csv(table_unsold,'Table_unsold.csv')
