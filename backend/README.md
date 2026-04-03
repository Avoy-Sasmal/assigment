# Task Manager Backend API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

A high-performance, RESTful API built with Express.js and MongoDB for mission-critical task management. This backend architecture supports full CRUD operations, advanced task tracking, and automated unit testing, designed with professional standards in mind.

---

## Technical Stack

- **Runtime Environment:** Node.js
- **Web Framework:** Express.js (v5.2.1)
- **Database Engine:** MongoDB with Mongoose ODM (v9.3.3)
- **Testing Framework:** Jest and Supertest
- **Configuration Management:** Dotenv
- **Process Management:** Nodemon (Development only)

---

## Core Features

- **Resource Management** - Full CRUD capabilities for task entities.
- **Priority Architecture** - Categorize tasks into low, medium, and high priority levels.
- **Dynamic Categorization** - Tasks can be tagged as work, personal, shopping, health, or other.
- **Deadline Management** - Integrated due date tracking for all tasks.
- **Status Tracking** - Real-time monitoring of task completion status.
- **Automated Timestamps** - Native MongoDB timestamping for audit trails.
- **Schema Validation** - Robust server-side validation for data integrity.
- **Automated Verification** - Comprehensive test suite leveraging Jest and Supertest.

---

## Quick Start Guide

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (Local or Atlas)

### Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

---

## Execution Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with hot-reloading |
| `npm run node` | Starts the production server |
| `npm test` | Executes the complete Jest test suite |
| `npm run test:watch` | Runs tests in watch mode for active development |

---

## API Documentation

### Base URL
`http://localhost:5000/api`

### Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/tasks` | Retrieve all tasks sorted by creation date |
| **GET** | `/tasks/:id` | Fetch a single task by its unique ID |
| **POST** | `/tasks` | Create a new task resource |
| **PUT** | `/tasks/:id` | Update an existing task or toggle completion status |
| **DELETE** | `/tasks/:id` | Permanently remove a task resource |

---

## Request and Response Schema

### Create Task
**POST** `/api/tasks`
```json
{
  "title": "Implementation of Unit Tests",
  "description": "Ensure 100% code coverage for the task controller",
  "priority": "high",
  "category": "work",
  "dueDate": "2026-04-10"
}
```

### Standard Response Format
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Implementation of Unit Tests",
    "completed": false,
    "priority": "high",
    "category": "work",
    "createdAt": "2026-04-03T10:00:00Z"
  }
}
```

---

## Project Architecture

```text
backend/
├── src/
│   ├── app.js               # Express application and middleware configuration
│   ├── server.js            # Entry point for the Node.js server
│   ├── config/              # Infrastructure configuration (Database)
│   ├── controllers/         # Core business logic handlers
│   ├── models/              # MongoDB data schemas
│   └── routes/              # Routing definitions
├── tests/                   # Automated test suites
├── .env                     # Environment-specific configuration
├── package.json             # Project manifest and scripts
└── README.md                # System documentation
```

---

## Data Model Specification

```javascript
{
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, maxlength: 500 },
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  category: { type: String, enum: ['work', 'personal', 'shopping', 'health', 'other'] },
  dueDate: { type: Date },
  timestamps: true // Tracks createdAt and updatedAt automatically
}
```

---

## Verification and Testing

This system implements automated unit and integration testing to ensure API stability.
- **Test Location:** All test files are located in the `tests/` directory.
- **HTTP Assertions:** Supertest is used for verifying endpoint responses.

To execute the test suite:
```bash
npm test
```

---

## Licensing

This project is released under the ISC License.

---

**Developed for enterprise-level task orchestration.**
