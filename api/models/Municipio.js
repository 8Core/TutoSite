// muncipio.js
module.exports = {

  attributes: {
    id_municipio: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_municipio: {
      type: 'string',
      size: 150
    },
    departamento: {
       model: 'departamento'
     },
     usuarios: {
       collection: 'usuario',
       via: 'municipio'
     }
  }
};
