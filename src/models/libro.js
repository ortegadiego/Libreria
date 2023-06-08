const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Libro extends Model {
}

Libro.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: {
      args: true,
      msg: "El isbn debe ser único"
    }
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El título es obligatorio'
      }
    }
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El autor es obligatorio'
      }
    }
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El año es obligatorio'
      }
    }
  },
  library: {
    type: DataTypes.INTEGER
  },
  eliminado: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize: dbInstance,
  modelName: 'Libros',
  createdAt: false,
  updatedAt: false
})

module.exports = { Libro }