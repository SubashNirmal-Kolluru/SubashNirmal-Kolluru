# Repository Reorganization Proposal

## Goal

Reposition the GitHub landing page as a **Senior Data Engineer / Software Engineer 2** portfolio. The current structure mixes academic, exploratory, and professional work under broad "DS/ML" and "SDE" categories. The new structure creates a clear hierarchy of attention: **Featured Projects** first, **Research** and **Archive** second, with a dedicated space for a future **Data Engineering Portfolio**.

## Current Structure

```
SubashNirmal-Kolluru/
├── DS-ML/
│   ├── Capacitated-Vehicle-Routing-Problem--Sentiment-Analysis
│   ├── COVID-19-Forecasting-RNN
│   ├── ConcreteStrengthPrediction--GradientDescent-vs-ML
│   ├── Fault-Diagnosis-using-OneClassSVM
│   ├── GST-Twitter-Sentiment-Analysis
│   ├── IPL-Win-Prediction
│   ├── Kaggle_MOA-DrugPrediction
│   ├── Movie-Gross-Prediction
│   ├── README.md
│   ├── SoundlessHonkingSystem
│   └── US-StateLevel-PharmacyAnalysis-Prediction
├── SDE/
│   ├── Portfolio-Website
│   ├── Portfolio-Website-V2
│   ├── README.md
│   ├── SimpleDB-DatabaseEngineImplementation
│   └── StrikeForce-FPS_Mission
├── README.md
└── .gitignore
```

## Proposed Structure

```
SubashNirmal-Kolluru/
├── Data-Engineering-Portfolio/          # Future repository (README draft)
├── DS-ML/
├── SDE/
├── README.md                            # Recruiter-facing GitHub profile
├── REPOSITORY_REORGANIZATION.md         # This document
└── .gitignore
```

No source code is moved or deleted. The reorganization is primarily a **narrative and navigational** change driven by the root README.

---

## Featured Projects

These projects should appear first on the GitHub profile README. They represent the strongest signals for senior data engineering, product, and research roles.

| Project | Location | Why Featured |
|---------|----------|--------------|
| **CarmaSure** | External product repo (add link) | End-to-end product built with Flutter; demonstrates privacy-first design, offline estimation, and insurance analytics |
| **Data Engineering Portfolio** | `Data-Engineering-Portfolio/` (future) | Production-grade AWS/Snowflake architectures, CDC pipelines, and Terraform modules |
| **Fault Diagnosis using One-Class SVM** | `DS-ML/Fault-Diagnosis-using-OneClassSVM/` | Published research with anomaly detection and prognostics |
| **SimpleDB Database Engine** | `SDE/SimpleDB-DatabaseEngineImplementation/` | Low-level systems engineering: query processing, storage, CRUD |
| **Train with Arms** | `SDE/StrikeForce-FPS_Mission/` | VR product with Unity, C#, AI enemies, and systems design |

---

## Research Projects

These projects support the "Published Researcher" positioning. They should be linked in the **Publications** and **Career Journey** sections.

| Project | Location | Publication |
|---------|----------|-------------|
| **Fault Diagnosis using One-Class SVM** | `DS-ML/Fault-Diagnosis-using-OneClassSVM/` | Early Detection of Equipment Failure Using One-Class SVM |
| **Hidden Markov Models** | Related code in `DS-ML/Fault-Diagnosis-using-OneClassSVM/` or separate future folder | Hidden Markov Models to Detect Early Equipment Failure |

---

## Archive Projects

These projects are valuable but exploratory or academic. They should be grouped in the **Project Archive** section of the README rather than featured prominently.

### Machine Learning & Analytics

- `DS-ML/COVID-19-Forecasting-RNN/`
- `DS-ML/Kaggle_MOA-DrugPrediction/`
- `DS-ML/ConcreteStrengthPrediction--GradientDescent-vs-ML/`
- `DS-ML/US-StateLevel-PharmacyAnalysis-Prediction/`
- `DS-ML/Movie-Gross-Prediction/`
- `DS-ML/IPL-Win-Prediction/`
- `DS-ML/GST-Twitter-Sentiment-Analysis/`

### Optimization & Systems

- `DS-ML/Capacitated-Vehicle-Routing-Problem--Sentiment-Analysis/`
- `DS-ML/SoundlessHonkingSystem/`

### Software Development

- `SDE/Portfolio-Website/`
- `SDE/Portfolio-Website-V2/`

---

## Future Data Engineering Portfolio

A new repository (`Data-Engineering-Portfolio/`) should be created as a dedicated, recruiter-facing showcase for production data engineering work. It should include:

- **AWS Architectures** — Reference diagrams for Glue, EMR, Lambda, S3, EventBridge
- **Snowflake Patterns** — Warehousing, data sharing, RBAC, zero-copy cloning
- **CDC Pipelines** — DynamoDB Streams, Kinesis, Debezium, S3 landing patterns
- **Data Modeling** — Star schema, data vault, medallion architecture examples
- **Terraform** — Reusable modules for data platform infrastructure
- **Airflow** — DAG patterns, observability, testing, and deployment templates
- **PySpark** — ETL transformations, unit testing, performance tuning examples

This repository will replace the current "Data Engineering Portfolio" placeholder in the root README once it is populated.

---

## README Hierarchy

1. **Hero / Title** — Name + four roles
2. **About** — Senior-level narrative
3. **Engineering Impact** — Quantified metrics
4. **Featured Work** — Five high-signal projects
5. **Career Journey** — Timeline of progression
6. **Publications** — Two research papers
7. **Technical Expertise** — Reduced badge set (9 badges)
8. **Project Archive** — Academic/exploratory projects
9. **Looking Ahead** — Future repository placeholders

---

## Next Steps

1. Populate `Data-Engineering-Portfolio/` with initial architecture diagrams and code samples.
2. Add a CarmaSure repository link once the project has a public repo.
3. Consider pinning the Featured Work repos on the GitHub profile.
4. Remove or archive the older `SDE/Portfolio-Website/` once V2 is deployed.
