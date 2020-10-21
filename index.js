const express = require('express')
const path = require('path')
const todoRoutes = require('./routes/todo')
const sequelize = require('./utils/database')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/todo', todoRoutes)

app.use((req, res, next) => {
  console.log(`Server is running on port ${PORT}`)
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

async function start() {
  try {
    await sequelize.sync({force: true}) // подключение к базе данных
    app.listen(PORT)
  } catch (error) {
    console.log(error)
  }
}

start()


// 1. Vuetify был взят устаревший, частично поменял, но остались нерабочие моменты с точки зрения стилей. (функционал полнотсью рабоочий)

// не по теме статья "Хуки жизненного цикла Vue.js": https://itnan.ru/post.php?c=1&p=350962