# Movie Success Prediction Based on IMDb Data

This repository explores the prediction of movie success or failure, specifically focusing on Bollywood movies, using data analysis and machine learning techniques. The project aims to forecast movie revenues using multiple features, including sentiment analysis, actor and director rankings, genre, and more.

## Project Overview

- **Objective**: Predict the success of Bollywood movies by analyzing various features, such as movie ratings, budget, cast, and genre.
- **Techniques Used**:
  - **Linear Regression**: For forecasting box office revenue.
  - **Sentiment Analysis**: To score and analyze reviews.
  - **AHP (Analytic Hierarchy Process)**: For converting nominal data (e.g., actors, directors) into numerical values.
  - **Data Preprocessing**: Cleans and integrates scraped data from IMDb and Bollywoodhungama.

## Requirements

- **Rvest**: Used for web scraping to extract data from IMDb and Bollywoodhungama.
- **AHP**: For calculating numerical values of nominal data based on a set of predefined rules.
- **Linear Regression**: Applied to predict the revenue of movies based on the input features.

![R](https://img.shields.io/badge/R-%23F6FFFF.svg?style=for-the-badge&logo=r&logoColor=blue)<br>
Libraries Used: <br>
![rvest](https://img.shields.io/badge/rvest-4B8F29?style=for-the-badge&logo=r&logoColor=white)
![SelectorGadget](https://img.shields.io/badge/SelectorGadget-7F7F7F?style=for-the-badge&logo=r&logoColor=white)
![dplyr](https://img.shields.io/badge/dplyr-4B9FD3?style=for-the-badge&logo=r&logoColor=white)
![tidyr](https://img.shields.io/badge/tidyr-FF7F32?style=for-the-badge&logo=r&logoColor=white)
![ggplot2](https://img.shields.io/badge/ggplot2-F0F0F0?style=for-the-badge&logo=r&logoColor=white)
![caret](https://img.shields.io/badge/caret-D1E0F1?style=for-the-badge&logo=r&logoColor=white)
![lm](https://img.shields.io/badge/lm-FF6F61?style=for-the-badge&logo=r&logoColor=white)
![boxcox](https://img.shields.io/badge/boxcox-1F77B4?style=for-the-badge&logo=r&logoColor=white)

## Dataset

The dataset includes:
- **IMDb Data**: Movie title, release year, ratings, votes, actors, directors, genre, etc.
- **Bollywoodhungama Data**: Opening day collection, weekend collection, etc.
- **Movie Reviews**: Scraped from IMDb for sentiment analysis.

![IMDb](https://img.shields.io/badge/IMDb-E1AD1A?style=for-the-badge&logo=imdb&logoColor=white)
![Bollywoodhungama](https://img.shields.io/badge/Bollywoodhungama-FF5733?style=for-the-badge&logo=bollywood&logoColor=white)

## Data Preprocessing

1. **Web Scraping**: Data is scraped from IMDb, Bollywoodhungama, and TOI websites.
2. **Data Integration**: Merged into a cohesive format and stored in an SQLite database.
3. **Nominal to Numerical Conversion**: AHP is used to convert nominal attributes (e.g., actors, directors) into numerical data for regression.

## Model Generation

- **Linear Regression Models**: 
  - Basic Linear Regression.
  - Linear Regression with outlier adjustment.
  - Linear Regression with Box-Cox transformation and outlier adjustment.
  
- **Model Performance**: Models are evaluated based on Adjusted R-squared, AIC, and BIC scores.

## Results

After model refinement, the linear regression with Box-Cox transformation showed the best performance, with an Adjusted R-squared value of 0.84.

