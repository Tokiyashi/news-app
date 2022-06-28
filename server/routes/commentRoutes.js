const Router = require('express')
const router = new Router()
const commentController = require('../controller/commentController')

router.post('/comment/create', commentController.createComment)
router.post('/comment/change', commentController.changeComment)
router.delete('/comment/delete', commentController.deleteComment)
router.get('/comments/post/:postId', commentController.getCommentsForPost)
router.get('/comments/count/post/:postId', commentController.getCountCommentsForPost)


router.get('/comment/test', commentController.test)


module.exports = router