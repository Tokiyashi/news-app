const Router = require('express')
const router = new Router()
const subscriptionController = require('../controllers/subscriptionController')

router.get('/', subscriptionController.blabla)

module.exports = router