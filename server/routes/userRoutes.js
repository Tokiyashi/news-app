const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')

router.post('/user/signup', userController.createUser)
router.post('/user/signin', userController.checkUser)



module.exports = router