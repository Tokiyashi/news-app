const express = require('express')
const userRouter = require('./routes/userRoutes')

const PORT = 8080

const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log('server strated on port ' + PORT))
