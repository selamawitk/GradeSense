const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  credit: { type: Number, required: true },
  semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true }
});

module.exports = mongoose.model('Course', courseSchema);
