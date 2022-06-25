const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')
const likeRouter = require('./likeRouter')
const commentRouter = require('./commentRouter')
const subscriptionRouter = require('./subscriptionRouter')

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/like', likeRouter)
router.use('/comment', commentRouter)
router.use('/subscription', subscriptionRouter)

module.exports = router