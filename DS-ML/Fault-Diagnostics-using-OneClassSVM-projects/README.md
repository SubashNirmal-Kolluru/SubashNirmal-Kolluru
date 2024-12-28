# One-Class Support Vector Machine (OCSVM) for Predictive Maintenance

## Overview

This project focuses on fault detection and prognostics in the oil industry using a one-class Support Vector Machine (SVM) model. The goal is to predict equipment failures and the remaining useful life (RUL) of machines using sensor data. The approach uses a data-driven methodology for condition-based maintenance, aiming to improve the reliability of oil-based assets.

## Objective

- Predict potential failures and estimate the RUL of oil industry equipment.
- Utilize sensor data to extract features such as mean, energy, standard deviation, and peak values.
- Implement a one-class SVM model for fault detection and prognosis.
- Handle missing data, preprocess sensor inputs, and extract meaningful features for model training.

## Requirements

| Language | Libraries                                      |
|----------|------------------------------------------------|
| ![Python](https://img.shields.io/badge/Python-%230769AD.svg?style=for-the-badge&logo=python&logoColor=yellow)   | ![pandas](https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white) ![Matplotlib](https://img.shields.io/badge/Matplotlib-FF8800?style=for-the-badge&logo=python&logoColor=white) ![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=blue) ![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white) ![CSV](https://img.shields.io/badge/CSV-008C45?style=for-the-badge&logo=csv&logoColor=white) ![Datetime](https://img.shields.io/badge/Datetime-1F4E79?style=for-the-badge&logo=python&logoColor=white) |

## Methodology

### 1. Data Extraction
- Extract sensor data from multiple Excel files collected from oil-based assets.
- Preprocess and combine data from various sensors to create a unified dataset.

### 2. Data Preprocessing
- Handle missing values through imputation techniques.
- Apply event extraction to detect significant sensor events, which could indicate operational anomalies.

### 3. Feature Engineering
- Extract features like mean, energy, standard deviation, and peak values from sensor readings.
- Perform statistical analysis to build a reliable feature set for model training.

### 4. Model Building
- Use a one-class SVM model to detect equipment faults.
- Implement condition-based maintenance strategies by predicting future failures based on current sensor data.

### 5. Model Validation and Evaluation
- Validate the one-class SVM model using appropriate metrics such as precision, recall, and F1 score.
- Cross-validate the model with different sensor inputs to assess robustness.

### 6. Prognostics
- Predict the remaining useful life (RUL) of equipment based on sensor data.
- Estimate the time remaining until failure occurs, enabling proactive maintenance and reducing downtime.
