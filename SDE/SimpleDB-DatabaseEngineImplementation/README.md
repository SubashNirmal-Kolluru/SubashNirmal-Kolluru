# Simple Database Implementation with Java and Spring Boot

This project is a lightweight database implementation created using **Java** and **Spring Boot**. It offers basic database functionalities like storage, querying, and data management. The implementation includes various utility classes and a modular structure to ensure flexibility and scalability.

---

## Features

- **Custom Commands Interface**: Handle user inputs and execute database commands.
- **Hex Dump Utility**: Visualize data in hexadecimal format for debugging.
- **Database Core**: Centralized database logic for managing data.
- **Utility Functions**: Helper methods for common operations.
- **Settings Configuration**: Centralized configuration management.

---

## Project Structure

The project consists of the following key components:

### 1. **`Commands.java`**
   - Handles database commands such as `CREATE`, `INSERT`, `SELECT`, and `DELETE`.
   - Parses and executes user input.
   - Provides error handling for invalid commands.

### 2. **`DavisBase.java`**
   - Acts as the entry point for the application.
   - Manages the initialization of the database.
   - Handles the main loop for interacting with users.

### 3. **`HexDump.java`**
   - Provides a utility to display data in hexadecimal format.
   - Useful for low-level debugging and inspecting binary data.

### 4. **`Settings.java`**
   - Manages global settings for the database, such as:
     - Default file paths.
     - Memory management settings.
     - Performance optimization parameters.

### 5. **`Utils.java`**
   - Contains utility methods for:
     - Data validation.
     - File I/O operations.
     - String manipulations.
     - Data conversions.

---

## Technologies Used

![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![JDK](https://img.shields.io/badge/JDK-5382A1?style=for-the-badge&logo=openjdk&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)

---
