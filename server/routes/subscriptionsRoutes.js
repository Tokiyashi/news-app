const Router = require('express')
const router = new Router()
const subscriptionsController = require('../controller/subscriptionsController')

router.post('/subscriptions/subscribe', subscriptionsController.subscribe)
router.post('/subscriptions/unsubscribe', subscriptionsController.unsubscribe)
router.get('/subscriptions/followers/:login', subscriptionsController.getFollowers)
router.get('/subscriptions/followings/:login', subscriptionsController.getFollowings)

router.post('/test', subscriptionsController.test)



module.exports = router

