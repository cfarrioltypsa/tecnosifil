const Obra = require('./obras.model');

const postObra = async (req, res, next) => {

  try {
    const obra = new Obra(req.body);
    obra.photo1 = req.files[0].path
    obra.photo2 = req.files[1].path
    obra.photo3 = req.files[2].path
    const savedObra = await obra.save();
    res.status(201).json(savedObra);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving obra' });
  }
};

const getObras = async (req, res, next) => {

  try {
    const obras = await Obra.find();
    res.status(201).json(obras);
  } catch (error) {
    res.status(500).json({ message: 'Error getting Obras' });
  }
}

module.exports = { postObra, getObras };