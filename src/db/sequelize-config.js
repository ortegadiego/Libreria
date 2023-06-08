const { Sequelize } = require('sequelize')
const dotenv = require('dotenv');
dotenv.config({path:'./src/env/.env'})

const host = process.env.BD_HOST
const user = process.env.BD_USER
const pass = process.env.DB_PASS
const database = process.env.DB_DATABASE
const port = process.env.DB_PORT

const dbInstance = new Sequelize({
  host: host,
  database: database,
  username: user,
  password: pass,
  port: port,
  dialect: "mysql"
})

module.exports = { dbInstance }