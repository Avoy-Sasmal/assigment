# Task Manager Backend API

A RESTful API built with Express.js and MongoDB for managing tasks. This backend provides complete CRUD operations for task management with features like priority levels, due dates, and completion tracking.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Request/Response Examples](#requestresponse-examples)
- [Project Structure](#project-structure)
- [Technologies](#technologies)

---

## Features

✅ **Get all tasks** - Retrieve all tasks sorted by creation date  
✅ **Get task by ID** - Fetch a specific task  
✅ **Create task** - Add new tasks with title, description, priority, and due date  
✅ **Update task** - Modify existing tasks  
✅ **Delete task** - Remove tasks from the database  
✅ **Task priority levels** - low, medium, high  
✅ **Task tracking** - Automatic timestamps (createdAt, updatedAt)  
✅ **Completion status** - Mark tasks as completed or pending  

---

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Postman or any API testing tool

---

## Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install:
   - `express` - Web framework
   - `mongoose` - MongoDB ODM
   - `dotenv` - Environment variables
   - `nodemon` - Development server with auto-reload

---

## Configuration

1. **Create a `.env` file** in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/task-manager
   NODE_ENV=development
   ```

2. **For MongoDB Atlas (Cloud):**
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/task-manager?retryWrites=true&w=majority
   NODE_ENV=development
   ```

---

## Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm run node
```

Server will start on `http://localhost:5000`

---

## API Endpoints

### Base URL
```
http://localhost:5000
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/` | Welcome message |
| **GET** | `/api/tasks` | Get all tasks |
| **GET** | `/api/tasks/:id` | Get a specific task |
| **POST** | `/api/tasks` | Create a new task |
| **PUT** | `/api/tasks/:id` | Update a task |
| **DELETE** | `/api/tasks/:id` | Delete a task |

---

## Request/Response Examples

### 1. Get All Tasks
**Request:**
```
GET /api/tasks
```

**Response (200):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Complete assignment",
      "description": "Finish the backend API",
      "completed": false,
      "priority": "high",
      "dueDate": "2026-04-10T00:00:00.000Z",
      "createdAt": "2026-04-03T10:00:00.000Z",
      "updatedAt": "2026-04-03T10:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "Review code",
      "description": "Code review for new features",
      "completed": true,
      "priority": "medium",
      "dueDate": "2026-04-05T00:00:00.000Z",
      "createdAt": "2026-04-02T14:30:00.000Z",
      "updatedAt": "2026-04-02T15:00:00.000Z",
      "__v": 0
    }
  ]
}
```

---

### 2. Get Task by ID
**Request:**
```
GET /api/tasks/507f1f77bcf86cd799439011
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete assignment",
    "description": "Finish the backend API",
    "completed": false,
    "priority": "high",
    "dueDate": "2026-04-10T00:00:00.000Z",
    "createdAt": "2026-04-03T10:00:00.000Z",
    "updatedAt": "2026-04-03T10:00:00.000Z"
  }
}
```

**Response (404):**
```json
{
  "success": false,
  "message": "Task not found"
}
```

---

### 3. Create Task
**Request:**
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete assignment",
  "description": "Finish the backend API",
  "priority": "high",
  "dueDate": "2026-04-10"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete assignment",
    "description": "Finish the backend API",
    "completed": false,
    "priority": "high",
    "dueDate": "2026-04-10T00:00:00.000Z",
    "createdAt": "2026-04-03T10:00:00.000Z",
    "updatedAt": "2026-04-03T10:00:00.000Z"
  }
}
```

**Response (400):**
```json
{
  "success": false,
  "message": "Title is required"
}
```

---

### 4. Update Task
**Request:**
```
PUT /api/tasks/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "title": "Updated task",
  "description": "Updated description",
  "completed": true,
  "priority": "medium",
  "dueDate": "2026-04-15"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Updated task",
    "description": "Updated description",
    "completed": true,
    "priority": "medium",
    "dueDate": "2026-04-15T00:00:00.000Z",
    "createdAt": "2026-04-03T10:00:00.000Z",
    "updatedAt": "2026-04-03T12:00:00.000Z"
  }
}
```

---

### 5. Delete Task
**Request:**
```
DELETE /api/tasks/507f1f77bcf86cd799439011
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete assignment",
    "description": "Finish the backend API",
    "completed": false,
    "priority": "high"
  }
}
```

---

## Project Structure

```
backend/
├── src/
│   ├── app.js                    # Express app setup & middleware
│   ├── server.js                 # Server entry point
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   └── task.controller.js   # Task business logic
│   ├── models/
│   │   └── task.model.js        # Task MongoDB schema
│   └── routes/
│       └── routes.js            # API endpoints
├── .env                          # Environment variables
├── .gitignore                    # Git ignore file
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

---

## Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework (v5.2.1)
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM (v9.3.3)
- **Nodemon** - Development server with auto-reload
- **Dotenv** - Environment variable management

---

## Task Model Schema

```javascript
{
  title: String (required, max 100 chars),
  description: String (max 500 chars),
  completed: Boolean (default: false),
  priority: String (enum: 'low', 'medium', 'high', default: 'medium'),
  dueDate: Date,
  createdAt: Date (automatic),
  updatedAt: Date (automatic)
}
```

---

## Error Handling

The API returns appropriate HTTP status codes:

- **200** - Success (GET, PUT, DELETE)
- **201** - Created (POST)
- **400** - Bad Request (validation error)
- **404** - Not Found (task not found)
- **500** - Server Error

---

## Testing with Postman

1. Import the API endpoints into Postman
2. Set the base URL: `http://localhost:5000`
3. Test each endpoint with sample data
4. Check responses and error handling

---

## Future Enhancements

- [ ] Add user authentication & authorization
- [ ] Add task categories/tags
- [ ] Add search and filter functionality
- [ ] Add pagination for large task lists
- [ ] Add task comments/notes
- [ ] Add email notifications for due dates
- [ ] Add export to CSV/PDF

---

## License

ISC

---

## Author

[Your Name/Team]

---

**Happy coding! 🚀**
