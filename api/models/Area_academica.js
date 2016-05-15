// area_academica.js
module.exports = {

  attributes: {
    id_area_academica: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion_area: {
      type: 'string',
      size: 45
    },
    // Add a reference to materia
    materia: {
      collection: 'materia',
      via: 'area_academica'
    }
  }
};
