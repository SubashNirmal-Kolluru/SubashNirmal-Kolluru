# -*- coding: utf-8 -*-
"""Part1


#Project 1: Part 1 - Linear Regression Using Gradient Descent
- Train a linear model on a dataset
  - Implement the model from scratch (linearRegression class)
  - Pre-Processing of the dataset (Dataset used - https://archive.ics.uci.edu/ml/datasets/Concrete+Compressive+Strength)
  - Use learning curve and other plots to understand more about the linear model
  - Tune parameters such as learning rate, no of iterations etc. to achieve the optimum error value
  - Measure the model using various evaluation statistics - MSE, MAE, R2, explained variance.
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error,mean_absolute_error,r2_score, explained_variance_score
import seaborn as sns
import matplotlib.pyplot as plt

"""Define Linear Regression class"""

class linearRegression:
  '''
    Vector X (input features)
    Vector y(target)
    theta  = Vector of coefficients
  '''
  #Function to give the predicted Y vector given input vector and weights
  def pred(self,X,theta):
    return X@theta

  #Function calculate the cost value      
  def cost(self,theta, X, y):
        return (1/(2*len(y))) * np.transpose((X@theta - y))@(X@theta - y)
  
  #Gradient descent function
  def gradientDescent(self,X,y,theta,learning_rate,iterations):
      '''
      learning_rate 
      iterations = no of iterations
      Returns the final theta vector and array of cost history over no of iterations
      '''
      m = len(y)
      cost_history = []
      for i in range(iterations):
        theta = theta - learning_rate*(1/m)*np.transpose(X)@(X@theta - y)
        cost_val = self.cost(theta,X,y)
        cost_history.append(cost_val)
      return theta,cost_history

"""Load the dataset and rename the columns

github link: https://raw.githubusercontent.com/Subashnirmal/git1/master/CementStrength.csv
"""

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

"""Function to normlize"""

df = df_train.copy()

def normal(x:list):
    return [(i-np.mean(x))/(max(x)-min(x)) for i in x]

df = df.apply(normal, axis=0)

"""Correlation plot"""

#Heatmap
corr = df_train.corr()

# Generate a mask for the upper triangle
mask = np.zeros_like(corr, dtype=np.bool)
mask[np.triu_indices_from(mask)] = True

fig, ax = plt.subplots(figsize=(10, 8))

# Generate a custom diverging colormap
cmap = sns.diverging_palette(220, 10, as_cmap=True, sep=100)

# Plot the heatmap with the mask and aspect ratio
sns.heatmap(corr, mask=mask, cmap=cmap, vmin=-1, vmax=1, center=0, linewidths=.5)
fig.suptitle('Correlation matrix of features', fontsize=15)
ax.text(0.77, 0.2, '', fontsize=13, ha='center', va='center',
         transform=ax.transAxes, color='grey', alpha=0.5)

fig.tight_layout()

sns.pairplot(df)

"""Scatter plot of some variables with target"""

# Plots of highly orrelated input features with the target
cem = sns.scatterplot(x=df_train['Cement'], y=df_train['Strength'])
plt.show()

"""Train test Split """

linear = linearRegression()

train, test = train_test_split(df, test_size=0.1, random_state=42)
X_train = train.drop(columns=['Strength']).to_numpy()
X_test = test.drop(columns=['Strength']).to_numpy()
y_train = train['Strength'].to_numpy()
y_test = test['Strength'].to_numpy()

theta = np.ones(X_train.shape[1])

"""Gradient Descent"""

learning_rate = 0.01
iterations = 500000
theta,cost_history = linear.gradientDescent(X_train,y_train,theta,learning_rate, iterations)
plt.figure(figsize=(7,5))
plt.plot(np.arange(learning_rate, iterations),cost_history)
plt.xlabel('Iteration'); plt.ylabel('Cost Function(MSE)'); plt.title('Vectorization: MSE Trend over Iterations')

"""Plot predicted vs observed values of Target"""

Y_max = y_test.max()
Y_min = y_test.min()

ax = sns.scatterplot(x=linear.pred(X_test,theta), y=y_test)
ax.set(ylim=(Y_min, Y_max))
ax.set(xlim=(Y_min, Y_max))
ax.set_xlabel("Predicted value of Strength")
ax.set_ylabel("Observed value of Strength")

X_ref = Y_ref = np.linspace(Y_min, Y_max, 100)
plt.plot(X_ref, Y_ref, color='red', linewidth=1)
plt.show()

"""Evaluate Performance"""

y_train_predict = linear.pred(X_train, theta)
y_test_predict = linear.pred(X_test, theta)

mae_train = mean_absolute_error(y_train,y_train_predict)
mse_train = mean_squared_error(y_train,y_train_predict)
r2_train = r2_score(y_train, y_train_predict)
evs_train = explained_variance_score(y_train,y_train_predict)

mae_test = mean_absolute_error(y_test,y_test_predict)
mse_test = mean_squared_error(y_test,y_test_predict)
r2_test = r2_score(y_test,y_test_predict)
evs_test = explained_variance_score(y_test,y_test_predict)

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



