const libreriaService = require('../services/libreria-service')
const libroService = require('../services/libro-service')

async function getAll(req, res) {

  const librerias = await libreriaService.getAll()

  res.status(200).send(librerias)
}

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const libreria = await libreriaService.getById(id)

    res.status(200).send(libreria)
  } catch(error) {
    next(error)
  }
  
}

async function create(req, res, next) {
  try{  
    const { name, location, telephone } = req.body;
    const libreria = await libreriaService.create(name, location, telephone)
    res.status(201).send(libreria)
  } catch(error){
    console.log(error.message)
    console.log(error)
    next(error)
  }
}

async function addBook(req, res){
  const { isbn, titulo, autor, year, library } = req.body
  const book = await libroService.create(isbn, titulo, autor, year, library)
  res.status(201).send(book)
}

async function edit(req, res) {
  const { id } = req.params
  const { name, location, telephone } = req.body;

  const libreria = await libreriaService.edit(id, name, location, telephone)

  res.status(201).send(libreria)
}

async function erase(req, res) {
  const { id } = req.params

  await libreriaService.erase(id)

  res.status(200).send(`Librería con el id ${id} ha sido eliminada exitosamente!`)
}

module.exports = { getAll, addBook, getById, create, edit, erase }