const Router = require('express')
const router = new Router()
const likeController = require('../controllers/likeController')

router.get('/', likeController.blabla)

module.exports = router