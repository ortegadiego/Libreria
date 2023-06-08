const {Usuario} = require('../models/usuario')
const jwt = require('jsonwebtoken')

async function login(name, password){
    const usuario = await Usuario.findOne({
        where: {
            name: name,
            password: password
        }
    })

    if (!usuario){
        throw new error("nombre y/o password incorrectos")
    }

    const token = jwt.sign({
        id: usuario.id,
        name: usuario.name
    }, "Claudia")

    return { accessToken: token}
}

async function getById(id) {
    const usuario = await Usuario.findByPk(id)
    
    if (usuario == null) {
      throw new Error("Usuario no encontrado")
    }
  
    return usuario
  }

module.exports = { login, getById}