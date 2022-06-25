const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.get('/', commentController.blabla)

module.exports = router