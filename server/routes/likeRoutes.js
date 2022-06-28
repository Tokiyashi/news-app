const Router = require('express')
const router = new Router()
const likeController = require('../controller/likeController')

router.post('/like', likeController.putLike)
router.delete('/like', likeController.removeLike)
router.get('/like/count/:postId', likeController.getLikeCountOnPost)
router.get('/like/check/:postId/:userLogin', likeController.checkLike)


router.get('/like/test', likeController.test)


module.exports = router