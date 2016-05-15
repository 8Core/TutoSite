// materoa.js
module.exports = {

  attributes: {
    id_usuario: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: 'string',
      size: 45
    },
    apellido: {
      type: 'string',
      size: 45
    },
    fecha_nac: {
      type: 'date',
    },
    email: {
      type: 'string',
      size: 150,
      unique: true
    },
    url_imagen: {
      type: 'string',
      size: 250
    },
    user: {
      type: 'string',
      size: 150
    },
    pass: {
      type: 'string',
      size: 25
    },
    acerca_usuario: {
      type: 'string',
      size: 300
    },
    // Add reference to municipio
    municipio: {
      model: 'municipio'
    },
    // Add a reference to tipo_usuario
    tipo_usuario: {
      model: 'tipo_usuario'
    },
    // Add a reference to Materia
    materias: {
      collection: 'materia',
      via: 'usuario',
      through: 'usuario_materia'
    },
    enlace1: {
      collection: 'enlace',
      via: 'usuario1'
    },
    enlace2: {
      collection: 'enlace',
      via: 'usuario2'
    }
  }
};
