const { Libro } = require('../models/libro')
const { Op } = require("sequelize");

async function getAll() {
  const list = await Libro.findAll({
    where:  { eliminado: false }
  })

  return list
}

async function getById(id) {
  const libro = await Libro.findByPk(id)
  
  if (libro == null) {
    throw new Error("Libro no encontrado")
  }

  return libro
}

async function create(isbn, titulo, autor, year, library) {
  const libro = new Libro()

  libro.isbn = isbn
  libro.titulo = titulo
  libro.autor = autor
  libro.year = year
  libro.eliminado = false
  if (library){
    libro.library = library
  }

  const libroCreated = await libro.save()
  return libroCreated
}

async function edit(id, isbn, titulo, autor, year, library) {

  const libro = await getById(id)

  if (isbn) {
    libro.isbn = isbn
  }
  
  if (titulo) {
    libro.titulo = titulo
  }
  
  if (autor) {
    libro.autor = autor
  }
  
  if (year){
    libro.year = year
  }

  if (library){
    libro.library = library
  }

  const libroEdited = await libro.save()

  return libroEdited
}

async function erase(id) {
  const libro = await getById(id)
  libro.eliminado = true
  const libroEdited = await libro.save()
  return libroEdited
}

async function existe_isbn(id, isbn){
  if (id){
    const encontrado = await Libro.findAll({
      where:  
      {
        isbn: isbn,
        id: {
          [Op.ne]: id
        }
      }
    })
    return encontrado.length > 0
  } else {

    const encontrado = await Libro.findAll({
      where:  { isbn: isbn }
    })
    return encontrado.length > 0
  }
}

module.exports = { getAll, getById, create, edit, erase, existe_isbn}