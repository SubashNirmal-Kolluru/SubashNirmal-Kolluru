library(twitteR)
library(RCurl)
library(plyr)
library(RJSONIO)
library(stringr)

# Declare Twitter API Credentials
api_key <- "------------------"
api_secret <- "----------------------"
token <- "---------------------"
token_secret <- "-------------------------"

# Create Twitter Connection
setup_twitter_oauth(api_key,api_secret,token,token_secret)

# Run Twitter Search. Format is searchTwitter("Search Terms", n=100, lang="en", geocode="lat,lng", also accepts since and until).

tweets_After<- searchTwitter("#GST", n=100000000, lang="en", since="2017-07-01",until="2017-07-08")
tweets_After<- strip_retweets(tweets_After, strip_manual=TRUE, strip_mt=TRUE) #remove retweets

# Transform tweets list into a data frame
tweets.df <- twListToDF(tweets_After)
#tweets.df[duplicated(tweets.df), ]

library('RSQLite')
db <- dbConnect(SQLite(),dbname='GST.sqlite')
dbWriteTable(db,"postGST",tweets.df, overwite=TRUE)
text_After<- dbGetQuery(db,"select text from postGST")

#tweets<- dbGetQuery(db,"select * from postGST")
#apply(tweets, 1, function(r) paste(names(tweets), r, sep=":", collapse=" "))            #df to list
#tweets_text <- tweets_df %>% select(text)                                               #gets text from dataframe
#text_After = laply(tweets_After, function(t) t$getText())                               #gets text directly from tweets_After
#rate.limit <- getCurRateLimitInfo()
#rate.limit[rate.limit$limit != rate.limit$remaining,]                                   #print out all metrics that have been changed


# Read in dictionary of positive and negative works
yay = scan('positive-words.txt',
           what='character', comment.char=';')
boo = scan('negative-words.txt',
           what='character', comment.char=';')
# Add a few twitter-specific negative phrases
bad_text = c(boo, 'wtf', 'epicfail', 'douchebag' , '#rollout' , 'rollout')
good_text = c(yay, 'upgrade', ':)', '#iVoted', 'voted')

score.sentiment = function(sentences, good_text, bad_text, .progress='none')
{
  require(plyr)
  require(stringr)
  # we got a vector of sentences. plyr will handle a list
  # or a vector as an "l" for us
  # we want a simple array of scores back, so we use
  # "l" + "a" + "ply" = "laply":
  scores = laply(sentences, function(sentence, good_text, bad_text) {
    
    # clean up sentences with R's regex-driven global substitute, gsub():
    sentence = gsub('[[:punct:]]', '', sentence)
    sentence = gsub('[[:cntrl:]]', '', sentence)
    sentence = gsub('\\d+', '', sentence)
    #to remove emojis
    sentence <- iconv(sentence, 'UTF-8', 'ASCII')
    sentence = tolower(sentence)        
    # split into words. str_split is in the stringr package
    word.list = str_split(sentence, '\\s+')
    # sometimes a list() is one level of hierarchy too much
    words = unlist(word.list)
    
    # compare our words to the dictionaries of positive & negative terms
    pos.matches = match(words, good_text)
    neg.matches = match(words, bad_text)
    
    # match() returns the position of the matched term or NA
    # we just want a TRUE/FALSE:
    pos.matches = !is.na(pos.matches)
    neg.matches = !is.na(neg.matches)
    
    # and conveniently enough, TRUE/FALSE will be treated as 1/0 by sum():
    score = sum(pos.matches) - sum(neg.matches)
    
    return(score)
  }, good_text, bad_text, .progress=.progress )
  
  scores.df = data.frame(score=scores, text=sentences)
  return(scores.df)
}

# Call the function and return a data frame
feelthabern <- score.sentiment(unlist(text_After), good_text, bad_text, .progress='text')
# Cut the text, just gets in the way
#plotdat <- plotdat[c("name", "score")]
plotdat<-data.frame(name=c(1:36792),score=c(1:36792))
plotdat$name <- feelthabern$row_names
plotdat$score <- feelthabern$score
# Remove neutral values of 0
plotdat <- plotdat[!plotdat$score == 0, ]



# Nice little quick plot
library(ggplot2)
qplot(factor(score), data=plotdat, geom="bar", 
      fill=factor(name),
      xlab = "Sentiment Score")