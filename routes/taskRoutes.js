const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Get all tasks
router.get('/', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Add a task
router.post('/', (req, res) => {
    const { name, description } = req.body;
    const query = 'INSERT INTO tasks (name, description) VALUES (?, ?)';
    db.query(query, [name, description], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Task added!');
    });
});

// Edit a task
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, status } = req.body;
    const query = 'UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?';
    db.query(query, [name, description, status, id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Task updated!');
    });
});

// Delete a task
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Task deleted!');
    });
});

module.exports = router;
