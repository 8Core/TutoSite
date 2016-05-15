// materia.js
module.exports = {

  attributes: {
    id_materia: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    description_materia: {
      type: 'string',
      size: 150
    },
    area_academica: {
      model: 'area_academica'
    },
    // Add a reference to usuario
    usuarios: {
      collection: 'usuario',
      via: 'materia',
      through: 'usuario_materia'
    }
  }
};
