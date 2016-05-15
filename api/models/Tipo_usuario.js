// tipo_usuario.js
module.exports = {

  attributes: {
    id_tipo_usuario: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_tipo: {
      type: 'string',
      size: 45
    },
    // Add a reference to usuario
    usuarios: {
      collection: 'usuario',
      via: 'tipo_usuario'
    }
  }
};
