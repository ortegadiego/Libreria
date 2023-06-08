const usuarioService = require('../services/usuario-service')

async function login(req,res, next) {
    const { name, password } = req.body

    try {
        const resultado = await usuarioService.login(name, password)
        res.status(200).send(resultado)
    } catch(error){
        next(error)
    }
}

module.exports = { login }