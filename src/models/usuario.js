const { Model,  DataTypes} = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Usuario extends Model {

}

Usuario.init({
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
            msg: 'El nombre es obligatorio'
            }
        }
    }
}, {
    sequelize: dbInstance,
    modelName: 'Usuarios',
    createdAt: false,
    updatedAt: false
  },)

module.exports = { Usuario }