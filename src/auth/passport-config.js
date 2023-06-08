const passportJwt = require('passport-jwt')
const usuarioService = require('../services/usuario-service') 
const dotenv = require('dotenv');
dotenv.config({path:'./src/env/.env'})

const ExctractJwt = passportJwt.ExtractJwt
const StrategyJwt = passportJwt.Strategy
const clave = process.env.APP_CLAVE

const PassportStrategy = new StrategyJwt({
  jwtFromRequest: ExctractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: clave
}, async (jwtPayload, next) => {
  
  const user = await usuarioService.getById(jwtPayload.id)

  if (user) {
    next(false, user, null)
  } else {
    next(true, null, null)
  }

})

module.exports = PassportStrategy