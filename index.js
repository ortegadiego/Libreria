const express = require('express')
const libreriaRoutes = require('./src/routes/libreria-routes')
const libroRoutes = require('./src/routes/libro-routes')
const usuarioRoutes = require('./src/routes/usuario-routes')
const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')
const { initializeAuthentication } = require('./src/auth/auth')
const dotenv = require('dotenv');
dotenv.config({path:'./src/env/.env'})

const app = express()
const port = process.env.APP_PORT

initializeAuthentication()

app.use(express.json())
app.use('/library', libreriaRoutes)
app.use('/book', libroRoutes)
app.use('/user', usuarioRoutes)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log("API con express corriendo en el puerto " + port)
})