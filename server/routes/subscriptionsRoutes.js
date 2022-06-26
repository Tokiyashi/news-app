const Router = require('express')
const router = new Router()
const subscriptionsController = require('../controller/subscriptionsController')

router.post('/post/create', subscriptionsController.createPost)

router.post('/test', subscriptionsController.test)



module.exports = router

