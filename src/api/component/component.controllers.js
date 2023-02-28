const Component = require('./component.model');

const postComponent = async (req, res, next) => {

  try {
    const component = new Component(req.body);
    const savedComponent = await component.save();
    res.status(201).json(savedComponent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving component' });
  }
};

const getComponents= async (req, res, next) => {

  try {
    const components = await Component.find();
    res.status(201).json(components);
  } catch (error) {
    res.status(500).json({ message: 'Error getting Components' });
  }
}

module.exports = { postComponent, getComponents };