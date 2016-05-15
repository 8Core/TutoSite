// enlace.js
module.exports = {

  attributes: {
    id_enlace: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    // Add a reference to usuario
    usuario1: {
      model: 'usuario'
    },
    usuario2: {
      model: 'usuario'
    }
  }
};
