# Data Engineering Portfolio

A curated collection of production-oriented data engineering patterns, architectures, and reference implementations.

This repository is designed for recruiters, hiring managers, and senior engineers who want to evaluate hands-on data engineering work across **AWS**, **Snowflake**, **Airflow**, **Terraform**, and **PySpark**.

---

## What This Portfolio Covers

| Area | Topics |
|------|--------|
| **AWS Architectures** | Glue, EMR Serverless, S3, Lambda, EventBridge, Kinesis, IAM, VPC |
| **Snowflake Patterns** | Warehousing, data sharing, RBAC, zero-copy cloning, time travel, tasks and streams |
| **CDC Pipelines** | DynamoDB Streams, Kinesis, Debezium, S3 landing zones, merge strategies |
| **Data Modeling** | Star schema, data vault, medallion architecture (bronze/silver/gold) |
| **Terraform** | Reusable modules for data platform infrastructure (IAM, S3, Glue, Snowflake) |
| **Airflow** | DAG patterns, task groups, observability, testing, CI/CD deployment |
| **PySpark** | ETL transformations, unit testing, performance tuning, SCD Type 2 |

---

## Repository Structure

```
Data-Engineering-Portfolio/
├── aws-architectures/
│   ├── cdc-dynamodb-kinesis-glue/
│   ├── emr-serverless-spark/
│   └── event-driven-s3-lambda/
├── snowflake-patterns/
│   ├── data-sharing/
│   ├── rbac-and-security/
│   └── tasks-and-streams/
├── cdc-pipelines/
│   ├── dynamodb-streams/
│   ├── debezium-postgres/
│   └── s3-landing-zone/
├── data-modeling/
│   ├── medallion-architecture/
│   ├── star-schema/
│   └── data-vault/
├── terraform/
│   ├── modules/
│   │   ├── s3-data-lake/
│   │   ├── glue-jobs/
│   │   └── snowflake-warehouse/
│   └── examples/
├── airflow/
│   ├── dags/
│   │   ├── elt-snowflake/
│   │   ├── spark-emr-glue/
│   │   └── cdc-merge/
│   └── plugins/
├── pyspark/
│   ├── etl-patterns/
│   ├── performance-tuning/
│   └── tests/
└── README.md
```

---

## AWS Architectures

Reference architectures for scalable, observable, and cost-effective data platforms on AWS.

- **CDC with DynamoDB Streams and Kinesis** — Near real-time change data capture into S3 and Snowflake
- **EMR Serverless Spark Jobs** — PySpark ETL with managed scaling and ephemeral clusters
- **Event-Driven S3 + Lambda** — Automated file ingestion, validation, and routing
- **Glue Data Catalog and Crawlers** — Centralized metadata management for data lakes

---

## Snowflake Patterns

Best practices for building secure and performant Snowflake environments.

- **Data Sharing** — Secure reader accounts and cross-account data sharing
- **RBAC and Security** — Role hierarchy, row access policies, masking, and dynamic data governance
- **Tasks and Streams** — Automated pipelines with Snowflake-native orchestration
- **Zero-Copy Cloning** — Fast environment provisioning for dev, test, and QA

---

## CDC Pipelines

Patterns for capturing and propagating changes from source systems to analytics platforms.

- **DynamoDB Streams** — Capture item-level changes and fan out to Kinesis/S3
- **Debezium + PostgreSQL** — Transaction log-based CDC into Kafka or S3
- **S3 Landing Zone** — File-based CDC ingestion with partitioning and schema enforcement
- **Merge Strategies** — SCD Type 1, Type 2, and upsert patterns in Snowflake and Spark

---

## Data Modeling

Reference schemas and transformation patterns for analytics workloads.

- **Medallion Architecture** — Bronze (raw), Silver (cleansed), Gold (aggregated) layers
- **Star Schema** — Dimensional modeling for reporting and BI tools
- **Data Vault** — Scalable modeling for enterprise data warehouses
- **Slowly Changing Dimensions** — SCD Type 1 and Type 2 implementations

---

## Terraform

Infrastructure as Code for data engineering environments.

- **S3 Data Lake Module** — Buckets, lifecycle policies, encryption, and access logging
- **Glue Jobs Module** — Managed ETL jobs, connections, triggers, and workflows
- **Snowflake Warehouse Module** — Warehouses, databases, roles, and schemas
- **IAM Roles and Policies** — Least-privilege access for data pipelines

---

## Airflow

Production-grade DAG patterns for orchestration.

- **ELT to Snowflake** — Load, transform, and validate with tasks and streams
- **Spark on EMR / Glue** — Submit PySpark jobs with dependency management
- **CDC Merge DAG** — Orchestrate change capture, staging, and merge into warehouse
- **Observability** — SLAs, alerting, retries, and custom operators

---

## PySpark

ETL and performance engineering with Apache Spark.

- **ETL Patterns** — Reading, cleaning, joining, and writing partitioned datasets
- **Unit Testing** — Testing transformations with pytest and chispa
- **Performance Tuning** — Partitioning, bucketing, broadcast joins, and AQE
- **Change Data Capture** — SCD Type 2 implementation in PySpark

---

## How to Use This Portfolio

1. Browse the architecture folders for high-level design patterns.
2. Review the Terraform modules for infrastructure conventions.
3. Run the Airflow DAGs and PySpark scripts in your own sandbox environment.
4. Adapt the Snowflake SQL patterns to your own warehouse.

---

## Technologies

<p>
  <img src="https://img.shields.io/badge/AWS-%23232F3E.svg?style=flat-square&logo=amazonwebservices&logoColor=white" alt="AWS">
  <img src="https://img.shields.io/badge/Snowflake-%2300AEFF.svg?style=flat-square&logo=snowflake&logoColor=white" alt="Snowflake">
  <img src="https://img.shields.io/badge/PySpark-%23E25A1C.svg?style=flat-square&logo=apachespark&logoColor=white" alt="PySpark">
  <img src="https://img.shields.io/badge/Python-%230769AD.svg?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Airflow-%23017CEE.svg?style=flat-square&logo=apacheairflow&logoColor=white" alt="Airflow">
  <img src="https://img.shields.io/badge/Terraform-%235835CC.svg?style=flat-square&logo=terraform&logoColor=white" alt="Terraform">
</p>

---

## Status

This repository is currently a **README draft and scaffold**. Code samples, diagrams, and Terraform modules will be added incrementally.

---

*Maintained by Subash Nirmal Kolluru.*
