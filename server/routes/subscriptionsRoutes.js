const Router = require('express')
const router = new Router()
const subscriptionsController = require('../controller/subscriptionsController')

router.get('/subscriptions/check/:login/:followLogin', subscriptionsController.checkSubscription)
router.post('/subscriptions/subscribe', subscriptionsController.subscribe)
router.delete('/subscriptions/unsubscribe', subscriptionsController.unsubscribe)
router.get('/subscriptions/followers/:login', subscriptionsController.getFollowers)
router.get('/subscriptions/followings/:login', subscriptionsController.getFollowings)



router.post('/test', subscriptionsController.test)



module.exports = router

