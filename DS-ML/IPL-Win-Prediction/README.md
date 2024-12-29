# IPL-Win-Prediction

# IPL Player Auction Price Prediction Model

This repository contains a model for predicting IPL player auction prices based on historical performance data. The data is collected from multiple sources, preprocessed, and used to build predictive models that can estimate the actual auction price of a player.

## Data Collection

Data is collected from three primary sources:

- **Wikipedia**: A manually collected dataset containing base price and sold-out prices for players from 2008 to 2017.
- **Howstat**: Data extracted from this website includes player statistics, which are stored in Excel files for each player.
- **ipltickets.net**: Auction data (base price and sold-out price for 2018) is scraped using R and the `rvest` package.

The auction prices (in dollars) are converted to INR (Indian Rupees) using the current exchange rate and adjusted to their Net Present Value (NPV). The historical auction prices (2008-2017) are averaged to calculate a base price for each player.

## Requirements

![R](https://img.shields.io/badge/R-%23F6FFFF.svg?style=for-the-badge&logo=r&logoColor=blue)<br>
Libraries Used: <br>
![rvest](https://img.shields.io/badge/rvest-4B8F29?style=for-the-badge&logo=r&logoColor=white)
![SelectorGadget](https://img.shields.io/badge/SelectorGadget-7F7F7F?style=for-the-badge&logo=r&logoColor=white)
![MASS](https://img.shields.io/badge/MASS-9A2A2A?style=for-the-badge&logo=r&logoColor=white)
![ISLR](https://img.shields.io/badge/ISLR-2A7D4E?style=for-the-badge&logo=r&logoColor=white)
![glmnet](https://img.shields.io/badge/glmnet-00A9E0?style=for-the-badge&logo=r&logoColor=white)
![leaps](https://img.shields.io/badge/leaps-FF5A00?style=for-the-badge&logo=r&logoColor=white)

## Web Scraping with R

The process of extracting data from websites is known as **web scraping**, which uses HTTP to retrieve HTML content. The `rvest` package in R is used to scrape player data from `ipltickets.net`. The `Selector Gadget` Chrome extension helps generate CSS selectors to extract the required data.

## Data Processing and Feature Engineering

### Collected Data

- A total of 48 players' data is collected, which includes various player statistics across formats like Test, ODI, T20, and IPL.
- The data is structured with player names as rows and variables such as age, batting and bowling skills, runs, wickets, and various other statistics as columns.
- A total of **108 decision variables** contribute to the output. These include fields like `BatSkill`, `BallSkill`, `RunsConceded`, `Wickets`, `StrikeRate`, and others.
  
### Categorical Data Conversion

- Categorical variables such as batting and bowling skills are converted into numerical values. For example:
  - Left-handed batsmen are assigned the value 1, and right-handed batsmen are assigned the value 2.
  - Missing or `NA` values are converted into numerical zeros.

### Feature Selection

Due to the large number of variables, **overfitting** is a concern. To reduce the feature set, we use a **correlation matrix** to identify and remove highly correlated variables (correlation > 0.95). This reduces the number of variables from 108 to 89, and after removing variables with almost all zero values, it is further reduced to **81 variables**.

## Target Variable

The target variable is the **auction price** of the player, represented in INR (Indian Rupees) after converting the historical auction prices into their NPV.

## Data Preprocessing

The preprocessing steps are as follows:

1. **Handling missing values**: All missing values are replaced with zeros.
2. **Categorical to numerical conversion**: Categorical data (e.g., left-hand/right-hand batting) is transformed into numerical values.
3. **Feature selection**: Based on correlation analysis, irrelevant or redundant features are removed.

## Model Building

To build a predictive model, we perform several steps:

1. **Feature Selection**:
   - Best Subset Selection
   - Stepwise Selection (Forward and Backward)
   
2. **Regularization**: Techniques like **LASSO** and **Ridge Regression** are used to avoid overfitting.
   
3. **Validation**: The model is validated using metrics like **Cp**, **AIC**, **BIC**, and **Adjusted R-squared**.

4. **Dimension Reduction**: Techniques like **Principal Component Regression (PCR)** and **Partial Least Squares (PLS)** are used to reduce the number of features.

### Stepwise Selection

1. **Forward Stepwise Selection**: Gradually adds predictors, calculating the R-squared value at each step. The highest R-squared is achieved with around 47 variables.
2. **Backward Stepwise Selection**: Starts with all predictors and removes the least significant ones. The R-squared value increases as less significant predictors are removed.

## Results and Inferences

### Forward Stepwise Selection

- The R-squared value improves as more variables are added, reaching close to 1 after around 47 variables.
- The coefficients of the model are calculated, and the optimal number of variables is selected based on metrics like Cp, AIC, BIC, and Adjusted R-squared.

### Backward Stepwise Selection

- Similar to forward selection, backward selection also shows improvements in R-squared as we remove less important variables.
- The final number of variables selected is **47**.

### Cross-validation

- The model undergoes cross-validation to ensure robustness. The validation errors are calculated for each fold, and the model is tested using 2018 auction data.

## Testing

The model is tested on IPL 2018 auction data, where the actual auction prices are compared to the predicted values. The performance of the model is evaluated based on how well it predicts the actual prices of the players.

## Conclusion

This project provides a predictive model for IPL player auction prices based on player performance data. The feature selection process, regularization, and model evaluation techniques help improve the accuracy of the predictions.
