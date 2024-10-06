Sys.setenv(http_proxy="http://@172.16.2.30:8080")

library(rvest)

d_frame <- data.frame(Team=c(),Mat=c(),Won=c(),Lost=c(),Tied=c(),NetR=c(),Points=c(),NetRR=c(),For=c(),Against=c(),Year=c())
years <- c(2008:2017)
for (i in years){
web <- read_html (paste("http://howstat.com/cricket/Statistics/IPL/PointsTable.asp?s=",i,sep=""))
data <- gsub("\r\n","",gsub("\t","",html_text(html_nodes(web,".TableLined tr+ tr td"))))
data1 <- matrix(data, nrow = length(data)/10,ncol = 10, byrow = TRUE)
d_frame1 <- cbind(as.data.frame(data1),as.data.frame(rep(i,length(data)/10)))
d_frame <- rbind(d_frame,d_frame1)
}
names(d_frame) <- c("Team","Mat","Won","Lost","Tied","N/R","Points","Net R/R","For","Against","Year")
setwd("C:/Users/subashnirmal/Desktop/subash/studies/AMSM2/project2")
write.csv(d_frame, "ipl_matches_list.csv")
