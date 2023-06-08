const express = require('express')
const libroController = require('../controllers/libro-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-todos", libroController.getAll)
router.get("/obtener-por-id/:id", libroController.getById)
router.post("/crear", isAuthenticated, libroController.create)
router.put("/editar/:id", isAuthenticated, libroController.edit)
router.delete("/eliminar/:id", isAuthenticated, libroController.erase)

module.exports = router