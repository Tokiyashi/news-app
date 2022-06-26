const express = require('express')
const fileUpload = require("express-fileupload")
const userRouter = require('./routes/userRoutes')

const PORT = 8080

const app = express()

app.use(fileUpload())
app.use(express.json())
app.use(express.static('static'))
app.use('/api', userRouter)

app.listen(PORT, () => console.log('server strated on port ' + PORT))
