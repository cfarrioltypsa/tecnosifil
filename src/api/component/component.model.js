const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  component_name: {
    type: String,
  }
});

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;
