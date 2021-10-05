
const Project = require('../models/Project');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProjectsById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getProjects,
  getProjectsById,
};
