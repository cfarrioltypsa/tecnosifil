const mongoose = require('mongoose');

const obraSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  code_obra: {
    type: String,
    index: true
  },
  componentName: {
    type:String
  },
  idComponent: {
    type: String,
    index: true
  },
  location: {
    type: String
  },
  anomalies: {
    type: String
  },
  intervention_proposal: {
    type: String
  },
  classification_component: {
    type: String
  },
  intervention_required: {
    type: String
  },
  deadline: {
    type: String
  },
  priority: {
    type: String
  },
  photo1: {
    type: String
  },
  photo2: {
    type: String
  },
  photo3: {
    type: String
  },
  isCompleted: {
    type: String,
    default: false
  }
});

const Obra = mongoose.model('Obra', obraSchema);

module.exports = Obra;
