# Food Delivery Optimization with Sentiment Analysis

## Introduction

This project aims to optimize food delivery routes by minimizing travel distances while considering customer feedback to filter out poorly rated restaurants. The goal is to reduce operational costs and improve service quality.

## Problem Statement

The objective is to:
1. Minimize the total distance traveled by delivery vehicles.
2. Exclude restaurants with negative customer reviews from the delivery service.

## Requirements

| Tech | Libraries Used         |
|----------|---------------------------|
| ![Python](https://img.shields.io/badge/Python-%230769AD.svg?style=for-the-badge&logo=python&logoColor=yellow)   | ![SciPy](https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white) ![Transformers](https://img.shields.io/badge/Transformers-FF9900?style=for-the-badge&logo=huggingface&logoColor=white) ![Google Maps API](https://img.shields.io/badge/Google_Maps_API-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white) ![pandas](https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white) ![Matplotlib](https://img.shields.io/badge/Matplotlib-FF8800?style=for-the-badge&logo=python&logoColor=white) ![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white) |
| ![R](https://img.shields.io/badge/R-%23F6FFFF.svg?style=for-the-badge&logo=r&logoColor=blue)        | ![ggmap](https://img.shields.io/badge/ggmap-4B8F29?style=for-the-badge&logo=r&logoColor=white) ![plyr](https://img.shields.io/badge/plyr-1E90FF?style=for-the-badge&logo=r&logoColor=white) ![stringr](https://img.shields.io/badge/stringr-3776AB?style=for-the-badge&logo=r&logoColor=white) ![ggplot2](https://img.shields.io/badge/ggplot2-150458?style=for-the-badge&logo=r&logoColor=white)      | 
|![CPLEX](https://img.shields.io/badge/CPLEX-%230E6D3A.svg?style=for-the-badge&logo=ibm&logoColor=white)   |    |

## Approach

### Vehicle Routing Optimization
The project uses a vehicle routing approach to efficiently plan the delivery routes, ensuring the least travel distance while optimizing the number of vehicles used.

### Sentiment Analysis
Customer reviews are analyzed to assess restaurant performance. Restaurants with consistently negative reviews are excluded from the service to ensure only high-rated options are considered for delivery.

### Data Collection
- **Distance Calculation**: Distances between restaurants and customer locations are retrieved using the Google Maps API.
- **Sentiment Analysis**: Customer reviews are scraped and analyzed to calculate sentiment scores, filtering out poorly rated restaurants.

### Optimization Objective
The solution aims to:
- Minimize the total distance traveled.
- Reduce the number of vehicles required.
- Exclude restaurants with negative sentiment.

## Conclusion

By combining route optimization and sentiment analysis, this project creates an efficient food delivery service that reduces costs and ensures better customer satisfaction by excluding poorly rated restaurants.
