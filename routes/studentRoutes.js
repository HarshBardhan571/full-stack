const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Create
router.post('/', studentController.createStudent);
// Read all
router.get('/', studentController.getAllStudents);
// Read one
router.get('/:id', studentController.getStudentById);
// Update
router.put('/:id', studentController.updateStudent);
// Delete
router.delete('/:id', studentController.deleteStudent);

module.exports = router;