const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')

const app = express()


const PORT = config.get('port')
const mongoUrl = config.get('mongoUrl')

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}))

app.use(express.json({ extended: true}))



async function start(){
  try {
    await mongoose.connect(mongoUrl, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    app.listen(PORT, () => console.log(`Server started on ${PORT}`))
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

start()