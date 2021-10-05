const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  src: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);




