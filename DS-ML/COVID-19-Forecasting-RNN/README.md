# Recurrent Neural Network (RNN) for Time Series Forecasting

This project demonstrates the implementation of a Recurrent Neural Network (RNN) model to forecast time series data using COVID-19 and population datasets.

## Project Highlights

### Data Preprocessing
- The dataset is cleaned by grouping confirmed, death, and recovered cases for each country and date.
- Population data is merged with COVID-19 data to calculate percentage of confirmed cases by population.
- Missing values are handled, and data is transformed into daily frequency for training.

### Model Implementation
- A custom RNN model is implemented from scratch for forecasting COVID-19 confirmed cases.
- Parameters like learning rate, number of epochs, and hidden dimensions are tuned for optimal performance.
- Sum Squared Error (SSE) is used as the evaluation metric.

### Visualization
- **Choropleth Maps**: Interactive maps of deaths, confirmed cases, and percentage of confirmed cases by population across countries.
- **Time Series Plots**: Worldwide confirmed cases over time and trends in the top 5 countries with the highest confirmed cases in 2020.

### Model Training and Prediction
- The model is trained on the scaled confirmed cases data with a sequence length of 10 days.
- The training process includes:
  - **Backpropagation Through Time (BPTT)** to update weights.
  - **Hyperparameter tuning**: Learning rate, epochs, hidden layer dimensions, etc.
  - **Prediction**: Forecasts for both training and validation sets.
  
## Requirements
| Language | Libraries                                      |
|----------|------------------------------------------------|
| ![Python](https://img.shields.io/badge/Python-%230769AD.svg?style=for-the-badge&logo=python&logoColor=yellow)   | ![pandas](https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white) ![Matplotlib](https://img.shields.io/badge/Matplotlib-FF8800?style=for-the-badge&logo=python&logoColor=white) ![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=blue) ![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white) |

## Dataset
- **COVID Data**: [Kaggle COVID-19 Time Series Data](https://www.kaggle.com/datasets/niketchauhan/covid-19-time-series-data)
- **Population Data**: [Kaggle World Population Dataset](https://www.kaggle.com/datasets/rsrishav/world-population)
