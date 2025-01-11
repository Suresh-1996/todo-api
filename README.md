# Task Manager Application

A simple, full-stack Task Manager application built with React, Tailwind CSS, Node.js, and MySQL. The application allows users to manage tasks with features like adding, editing, deleting, and marking tasks as completed.

## Back-End:

- RESTful API built with Node.js and Express.js.
- MySQL database to store task information.
- Endpoints for CRUD operations:
  - Add a task.
  - Retrieve tasks.
  - Update a task.
  - Delete a task.
  - Edit existing tasks.
  - Delete tasks.

## Database (Create a MySQL database)

```bash
  CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('Completed', 'Not Completed') DEFAULT 'Not Completed'
);
```

## Tech Stack

**Server:**

- Node.js
- Express.js
- MySQL

## Setup Instructions

#### Prerequisites:

- Node.js installed.
- MySQL server running.

#### Steps:

- Clone the Repository

```bash
 git clone <repository-url>
 cd todo-api

```

- Install Dependencies

```bash
  node index.js
```

- Start the Development Server

```bash
  npm start
```
