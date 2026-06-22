# GST Twitter Sentiment Analysis

## Problem Statement

Analyze public sentiment on Twitter around India's **Goods and Services Tax (GST)** rollout by comparing tweet polarity before and after the implementation date. The goal is to understand how public opinion shifted during a major policy change using social media data and NLP techniques.

## Methodology

1. **Data Collection**: Queried the Twitter API via the `twitteR` R package using the `#GST` hashtag, collecting English tweets within a defined time window around the GST rollout.
2. **Data Storage**: Stored raw tweet metadata and text in **SQLite** databases (`GST.sqlite`, `gstdata.sqlite`) for reproducible analysis.
3. **Preprocessing**: Removed retweets, punctuation, control characters, digits, and emojis; converted text to lowercase.
4. **Sentiment Scoring**: Implemented a lexicon-based scoring function using positive/negative word lists (Hu & Liu sentiment lexicon). Added Twitter-specific terms such as `wtf`, `epicfail`, `douchebag`, and `rollout`.
5. **Analysis**: Computed per-tweet sentiment scores and aggregate sentiment distributions. Visualized results with `ggplot2` bar charts.

## Dataset

- **Source**: Twitter API via `twitteR`.
- **Query**: `#GST` English tweets.
- **Size**: ~36,792 tweets after preprocessing and retweet removal.
- **Storage**: SQLite databases (`data.sqlite`, `gstdata.sqlite`).

## Files

- `twitterdraft.R` — End-to-end pipeline: OAuth setup, tweet collection, SQLite storage, and sentiment scoring.
- `sensitive_gst.R` — Sentiment scoring on post-GST tweets stored in `gstdata.sqlite`.
- `regression.R` — Exploratory regression analysis using sentiment and movie-related features.

## Results

- Generated sentiment score distributions for GST-related tweets.
- Identified dominant negative and positive sentiment clusters during the rollout window.
- Produced visualizations showing the frequency of sentiment scores across the collected tweets.

## Requirements

- R
- `twitteR`, `RSQLite`, `plyr`, `stringr`, `ggplot2`
- Positive/negative word lists (`positive-words.txt`, `negative-words.txt`)

## Conclusion

This project demonstrates a complete social-media NLP pipeline: data collection, storage, preprocessing, lexicon-based sentiment analysis, and visualization. The approach can be extended to other policy events or brand-reputation monitoring use cases.