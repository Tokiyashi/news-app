const express = require('express')
const cors = require("cors")
const fileUpload = require("express-fileupload")
const userRouter = require('./routes/userRoutes')
const subscriptionsRouter = require('./routes/subscriptionsRoutes')
const postRouter = require('./routes/postRoutes')
const likeRouter = require('./routes/likeRoutes')
const commentRouter = require('./routes/commentRoutes')


const PORT = 8080

const app = express()

app.use(cors())
app.use(fileUpload())

app.use(express.json())
app.use(express.static('static'))
app.use('/api', userRouter)
app.use('/api', subscriptionsRouter)
app.use('/api', postRouter)
app.use('/api', likeRouter)
app.use('/api', commentRouter)

app.listen(8080)
