const { Libreria } = require('../models/libreria')
const { Libro } = require('../models/libro')

async function getAll() {
  const list = await Libreria.findAll({
    where:  { eliminado: false }
  })

  return list
}

async function getById(id) {
  const libreria = await Libreria.findOne({
    where: {
      id: id
    },
    include: [{
      model: Libro
    }]
  })
  
  if (libreria == null) {
    throw new Error("Libreria no encontrada")
  }

  return libreria
}

async function create(name, location, telephone) {
  const libreria = new Libreria()

  libreria.name = name
  libreria.location = location
  libreria.telephone = telephone
  libreria.eliminado = false

  const libreriaCreated = await libreria.save()
  return libreriaCreated
}

async function edit(id, name, location, telephone) {
  const libreria = await getById(id)

  if (name) {
    libreria.name = name
  }
  
  if (location) {
    libreria.location = location
  }
  
  if (telephone) {
    libreria.telephone = telephone
  }
  
  const libreriaEdited = await libreria.save()

  return libreriaEdited
}

async function erase(id) {
  const libreria = await getById(id)
  libreria.eliminado = true
  //await libreria.destroy()
  const libreriaEdited = await libreria.save()
  return libreriaEdited
}

module.exports = { getAll, getById, create, edit, erase }