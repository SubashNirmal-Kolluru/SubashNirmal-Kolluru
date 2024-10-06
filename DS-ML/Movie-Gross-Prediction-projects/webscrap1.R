library('rvest')
library('RCurl')

#Specifying the url for desired website to be scrapped
#url <- 'http://www.imdb.com/search/title?count=100&release_date=2016,2016&title_type=feature'

#Reading the HTML code from the website
opts <- list(
  proxy         = "10.3.100.207", 
  #  proxyusername = "mydomain\\myusername", 
  #  proxypassword = "mypassword", 
  proxyport     = 8080
)
url <- getURL("http://stackoverflow.com", .opts = opts)
webpage <- read_html(url)
