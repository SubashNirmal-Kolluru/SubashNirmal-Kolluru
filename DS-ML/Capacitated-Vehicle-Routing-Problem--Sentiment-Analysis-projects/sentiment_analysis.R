library(plyr)
library(stringr)

file <- c("amigos_r","BTP_arabian","BTP_askaan","BTP_dominos","BTP_flavours","BTP_hbite","BTP_heritage","BTP_himalayan",
         "BTP_hpark","BTP_punjab_hotel","BTP_scrummys","BTP_taaz","BTPa_Capsicum","BTPa_Dreamland","BTPa_Foodcity",
         "BTPa_Havan","BTPa_Kaushik","BTPa_LS","BTPa_Waldrof")
total_score <- c()
for (i in file){
setwd("C:/Users/subashnirmal/Desktop/BTP/BTP2/hotel_reviews/")
data <- read.csv(paste(i,".csv",sep = ""))
text_After <- data[2]

# Read in dictionary of positive and negative works
yay = scan('positive-words.txt',
           what='character', comment.char=';')
boo = scan('negative-words.txt',
           what='character', comment.char=';')
# Add a few twitter-specific negative phrases
bad_text = c(boo, 'wtf', 'epicfail', 'douchebag' , '#rollout' , 'rollout')
good_text = c(yay, 'upgrade', ':)', '#iVoted', 'voted')

setwd("C:/Users/subashnirmal/Desktop/BTP/BTP2/h_reviewscore/")
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
    #tscore = tscore + score
    return(score)
  }, good_text, bad_text, .progress=.progress )
  tscore = sum(scores)
  scores.df = data.frame(score=scores, text=sentences)
  scores.df = rbind(scores.df,data.frame(score=tscore,text='TOTAL'))
  return(scores.df)
}

# Call the function and return a data frame
feelthabern <- score.sentiment(unlist(text_After), good_text, bad_text, .progress='text')
write.csv(feelthabern,paste(i,"_score.csv",sep = ""))
total_score <- c(total_score,sum(as.numeric(unlist(feelthabern[1]))))
}

hotels <- gsub("BTP_","",gsub("BTPa_","",gsub("_r","",file)))
write.csv(data.frame(Hotels = hotels, Review_score = total_score),"final_score.csv")
