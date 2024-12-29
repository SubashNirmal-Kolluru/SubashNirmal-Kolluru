Sys.setenv(http_proxy="http://@172.16.2.30:8080")

library(rvest)
setwd("C:/Users/subashnirmal/Desktop/subash/studies/AMSM2/project2")

web <- read_html ("http://statisticstimes.com/sports/all-ipl-points-table.php")
data <- html_text(html_nodes(web,"#table_id td"))
data1 <- matrix(data, nrow = 13,ncol = 13, byrow = TRUE)
d_frame <- as.data.frame(data1)
d_frame <- d_frame[,-1]
names(d_frame) <- c("Team","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","AVG")
write.csv(d_frame,"positions.csv")
