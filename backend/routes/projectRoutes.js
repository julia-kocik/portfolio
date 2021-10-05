const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectsById,
} = require('../controller/projectsControllers');

router.get('/projects', getProjects);
router.get('/projects/:id', getProjectsById);

module.exports = router;

