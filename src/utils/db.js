const mongoose = require("mongoose");

const urlDB = 'mongodb+srv://cristian:cristian123@cluster0.qtke00l.mongodb.net/?retryWrites=true&w=majority'
''
const mongoDb = urlDB;
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Nombre de DB y el Host en el que está
    const { name, host } = db.connection;
    console.log(`Conectado a la DB : ${name} en el host: ${host}`);
  } catch (error) {
    console.error(`No se ha podido conectar a la DB`, error);
  }
};

module.exports = { connect };
