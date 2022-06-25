const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')

router.post('/user/signup', userController.createUser)



module.exports = router