// conocimiento.js
module.exports = {
  attributes: {
    id_usuario_materia: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    usuario:{
      model:'usuario'
    },
    materia: {
      model: 'materia'
    }
  }
}
