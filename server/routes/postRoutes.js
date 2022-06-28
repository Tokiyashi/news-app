const Router = require('express')
const router = new Router()
const postController = require('../controller/postController')

router.post('/post/create', postController.createPost)
router.delete('/post/delete', postController.deletePost)
router.get('/post/id/:id', postController.getPostById)
router.get('/post/userId/:userId', postController.getPostsByUserId)
router.get('/post/all', postController.getPosts)
router.get('/post/all/sort/asc', postController.getPostsOrderByDateASC)
router.get('/post/all/sort/desc', postController.getPostsOrderByDateDESC)
// router.get('/subscriptions/check/:login/:followLogin', subscriptionsController.checkSubscription)
// router.post('/subscriptions/subscribe', subscriptionsController.subscribe)
// router.delete('/subscriptions/unsubscribe', subscriptionsController.unsubscribe)
// router.get('/subscriptions/followers/:login', subscriptionsController.getFollowers)
// router.get('/subscriptions/followings/:login', subscriptionsController.getFollowings)



router.get('/post/test', postController.test)



module.exports = router