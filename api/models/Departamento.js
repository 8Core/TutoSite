//departamento.js
module.exports = {

  attributes: {
    id_departamento: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_departamento: {
      type: 'string',
      size: 45
    },
    // Add a reference to municipio
    municipios: {
      collection: 'municipio',
      via: 'departamento'
    }
  }
};
