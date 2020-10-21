const Sequelize = require('sequelize')

const DB_NAME = 'node.js-course-vm-app-2-todo-list'
const USER_NAME = 'root'
const PASSWORD = 'KS21Arx12_'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize
