const express = require ('express')
const cors = require ('cors')
const db = require('./db')
const todoRoutes = require ('./todoRoutes')

const app = express()

app.use(express.json())
app.use(cors())

db.connect()

app.use('/api/todos', todoRoutes)

const PORT = process.env.PORT || 5000
app.listen (PORT, () =>{
    console.log(`Server is running on Port ${PORT}`)
})