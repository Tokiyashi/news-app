const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')

router.post('/user/signup', userController.createUser)
router.post('/user/signin', userController.checkUser)
router.get('/user/id/:id', userController.getUserById)
router.get('/user/login/:login', userController.getUserByLogin)
router.get('/user/name/:name/:surname', userController.getUserByName)

router.post('/user/avatar/change', userController.changeAvatar)
router.post('/user/login/change/', userController.changeLogin)
router.post('/user/quote/change', userController.changeQuote)

router.post('/test', userController.test)



module.exports = router