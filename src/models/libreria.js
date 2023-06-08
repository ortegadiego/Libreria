const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')
const { Libro } = require('./libro')

class Libreria extends Model {

}

Libreria.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El nombre es obligatorio'
      }
    }
  },
  location: {
    type: DataTypes.STRING
  },
  telephone: {
    type: DataTypes.STRING
  },
  eliminado: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize: dbInstance,
  modelName: 'Librerias',
  createdAt: false,
  updatedAt: false
},
 
)
Libreria.hasMany(Libro, { foreignKey: 'library'})
Libro.belongsTo(Libreria, { foreignKey: 'library'})

module.exports = { Libreria }