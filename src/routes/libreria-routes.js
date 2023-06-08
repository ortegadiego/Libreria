const express = require('express')
const libreriaController = require('../controllers/libreria-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-todos", libreriaController.getAll)
router.get("/obtener-por-id/:id", libreriaController.getById)
router.post("/crear", isAuthenticated, libreriaController.create)
router.put("/editar/:id", isAuthenticated, libreriaController.edit)
router.delete("/eliminar/:id", isAuthenticated, libreriaController.erase)
router.post("/agregar-libro", isAuthenticated, libreriaController.addBook)

module.exports = router