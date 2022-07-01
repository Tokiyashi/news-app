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
router.get('/post/subscriptions/login/:login', postController.getPostsFromSubscriptions)
router.get('/post/topics', postController.getTopics)
router.get('/post/topic/:topic', postController.getPostsByTopic)
router.post('/post/topic/change', postController.changeTopic)


router.get('/post/test', postController.test)


module.exports = router