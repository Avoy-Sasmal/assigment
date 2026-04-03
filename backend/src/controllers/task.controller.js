import Task from '../models/task.model.js';

// Get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching tasks',
            error: error.message
        });
    }
};

// Get single task by ID
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching task',
            error: error.message
        });
    }
};

// Create new task
export const createTask = async (req, res) => {
    try {
        const { title, description, priority, dueDate } = req.body;
        
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required'
            });
        }
        
        const task = new Task({
            title,
            description,
            priority,
            dueDate
        });
        
        await task.save();
        
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: task
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating task',
            error: error.message
        });
    }
};

// Update task
export const updateTask = async (req, res) => {
    try {
        const { title, description, completed, priority, dueDate } = req.body;
        
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        if (title) task.title = title;
        if (description !== undefined) task.description = description;
        if (completed !== undefined) task.completed = completed;
        if (priority) task.priority = priority;
        if (dueDate) task.dueDate = dueDate;
        
        await task.save();
        
        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: task
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating task',
            error: error.message
        });
    }
};

// Delete task
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully',
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting task',
            error: error.message
        });
    }
};
