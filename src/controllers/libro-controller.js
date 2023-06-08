const libroService = require('../services/libro-service')

async function getAll(req, res) {

  const libros = await libroService.getAll()

  res.status(200).send(libros)
}

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const libro = await libroService.getById(id)

    res.status(200).send(libro)
  } catch(error) {
    next(error)
  }
  
}

async function create(req, res) {
  const { isbn, titulo, autor, year, library } = req.body

  let existe = await libroService.existe_isbn(null, isbn)
  if (existe){
    res.status(403).send(`No se permite Libro con el isbn ${isbn} repetido`)
    return;
  }

  const libro = await libroService.create(isbn, titulo, autor, year, library )

  res.status(201).send(libro)
}

async function edit(req, res) {
  const { id } = req.params
  const { isbn, titulo, autor, year, library } = req.body;

  let existe = await libroService.existe_isbn(id, isbn)
  if (existe){
    res.status(403).send(`No se permite Libro con el isbn ${isbn} repetido`)
    return;
  }

  const libro = await libroService.edit(id, isbn, titulo, autor, year, library)

  res.status(201).send(libro)
}

async function erase(req, res) {
  const { id } = req.params

  await libroService.erase(id)

  res.status(200).send(`Libro con el id ${id} ha sido eliminado exitosamente!`)
}

module.exports = { getAll, getById, create, edit, erase }