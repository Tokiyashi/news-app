const express = require('express')
const fileUpload = require("express-fileupload")
const userRouter = require('./routes/userRoutes')
const subscriptionsRouter = require('./routes/subscriptionsRoutes')
const postRouter = require('./routes/postRoutes')

const PORT = 3000

const app = express()

app.use(fileUpload())
app.use(express.json())
app.use(express.static('static'))
app.use('/api', userRouter)
app.use('/api', subscriptionsRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log('server strated on port ' + PORT))
