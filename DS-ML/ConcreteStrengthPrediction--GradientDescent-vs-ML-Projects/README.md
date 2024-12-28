# Linear Regression Using Gradient Descent and ML Libraries

This project demonstrates linear regression using:
1. A custom implementation of gradient descent.
2. Scikit-learn's `LinearRegression`.

## Project Highlights

### Part 1: Gradient Descent Implementation
- Custom `linearRegression` class for training.
- Dataset preprocessing and normalization.
- Optimized learning rate and iterations for minimum error.
- Evaluation metrics:
  - Mean Absolute Error (MAE)
  - Mean Squared Error (MSE)
  - R-squared (R²)
  - Explained Variance Score
- Visualizations:
  - Cost function trend over iterations.
  - Correlation heatmap and scatter plots.

### Part 2: Scikit-Learn Linear Regression
- Normalized features with `StandardScaler`.
- Split dataset into train/test sets.
- Evaluated and compared with custom implementation metrics.

## Requirements
| Tech | Libraries                                |
|----------|------------------------------------------|
| ![Python](https://img.shields.io/badge/Python-%230769AD.svg?style=for-the-badge&logo=python&logoColor=yellow)   | ![pandas](https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white) ![Matplotlib](https://img.shields.io/badge/Matplotlib-FF8800?style=for-the-badge&logo=python&logoColor=white) ![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=blue) |

## Dataset
- **Source**: [Concrete Compressive Strength](https://archive.ics.uci.edu/ml/datasets/Concrete+Compressive+Strength)
