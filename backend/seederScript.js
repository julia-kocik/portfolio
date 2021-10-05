
require('dotenv').config();


const projectData = require('./data/projects');
const connectDB = require('./config/db');
const Project = require('./models/Project');

connectDB();

const importData = async () => {
  try {
    await Project.deleteMany({});

    await Project.insertMany(projectData);

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();

