# -*- coding: utf-8 -*-
"""Part2

# Assignment 1: Part 2 - Linear Regression Using ML Libraries

- Train a linear model on a dataset using ML Libraries
  - We used the linear regression library of scikit learn
  - Measure the model using various evaluation statistics - MSE, MAE, explained variance, R2 value.
  - Compare the results with the part 1 linear regression using gradient descent results
"""

import numpy as np
import seaborn as sns
import pandas as pd
from matplotlib import pyplot
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score, explained_variance_score
from sklearn import linear_model

df_train = pd.read_csv('https://raw.githubusercontent.com/Subashnirmal/git1/master/CementStrength.csv')

df_train.rename(
    columns={
        "Cement (component 1)(kg in a m^3 mixture)" : "Cement", 
        "Blast Furnace Slag (component 2)(kg in a m^3 mixture)" : "Blast Furnace", 
        "Fly Ash (component 3)(kg in a m^3 mixture)" : "Fly Ash",
        "Water  (component 4)(kg in a m^3 mixture)" : "Water",
        "Superplasticizer (component 5)(kg in a m^3 mixture)" : "Superplasticizer",
        "Coarse Aggregate  (component 6)(kg in a m^3 mixture)" : "Coarse Aggregate",
        "Fine Aggregate (component 7)(kg in a m^3 mixture)" : "Fine Aggregate",
        "Age (day)" : "Age",
        "Concrete compressive strength(MPa, megapascals) " : "Strength",
    },
    inplace = True
)
print("########## NULL Values in dataset ###########")
print(df_train.isna().sum())
df_train.corr()

"""Normalise, Train test split and Model training"""

df = df_train.copy()

scaler = StandardScaler()
df = pd.DataFrame(scaler.fit_transform(df), columns=df_train.columns)

train, test = train_test_split(df, test_size=0.1, random_state = 42)
X_train = train.drop(columns=['Strength']).to_numpy()
X_test = test.drop(columns=['Strength']).to_numpy()
Y_train = train['Strength'].to_numpy()
Y_test = test['Strength'].to_numpy()

linear_model = LinearRegression().fit(X_train, Y_train)

"""Evaluate Performance"""

Y_train_predict = linear_model.predict(X_train)
Y_test_predict = linear_model.predict(X_test)

mae_train = mean_absolute_error(Y_train,Y_train_predict)
mse_train = mean_squared_error(Y_train,Y_train_predict)
r2_train = r2_score(Y_train, Y_train_predict)
evs_train = explained_variance_score(Y_train,Y_train_predict)

mae_test = mean_absolute_error(Y_test,Y_test_predict)
mse_test = mean_squared_error(Y_test,Y_test_predict)
r2_test = r2_score(Y_test,Y_test_predict)
evs_test = explained_variance_score(Y_test,Y_test_predict)

df_metrics = pd.DataFrame([[mae_train, mae_test], [mse_train, mse_test], [r2_train, r2_test], [evs_train, evs_test]], 
             index = ["Mean Absolute Error", "Mean Square Error", "R2 Score", "Explained Variance Score"],
             columns = ["train", "test"])

display(df_metrics)

print()
print(" ------ Training Performance ------ ")
print("- Mean Squared Error =",mae_train)
print("- Mean Absolute Error =",mse_train)
print("- R2 Score =",r2_train)
print("- Explained Variance Score =",evs_train)
print()
print(" ------ Testing Performance ------ ")
print("- Mean Squared Error =",mae_test)
print("- Mean Absolute Error =",mae_test)
print("- R2 Score =",mae_test)
print("- Explained Variance Score =",evs_test)

