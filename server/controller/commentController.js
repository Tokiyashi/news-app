const db = require('../db')

class CommentController {

    async createComment(req, res) {
        var id = 0
        const {userId, postId, note} = req.body
        const isThereUser = await db.query('select login from "user" where id = $1', [userId])
        const isTherePost = await db.query('select user_id from "post" where id = $1', [postId])
        if (isThereUser.rowCount == 1 && isTherePost.rowCount == 1) {
            const maxId = await db.query('SELECT max(id) FROM "comment"')
            if (maxId.rows[0]['max'] || maxId.rows[0]['max'] == 0) {
                id = maxId.rows[0]['max'] + 1
            } else {
                id = 0
            }
            await db.query('insert into "comment" values ($1, $2, $3, $4)', [id, userId, postId, note])
            res.json({code: 0, text: 'Комментарий добавлен'})
        } else {
            res.json({code: 1, text: 'Пользователь или пост не найдены'})
        }
    }

    async changeComment(req, res) {
        const {commentId, note} = req.body
        const isThereComment = await db.query('select id from "comment" where id = $1', [commentId])
        if (isThereComment.rowCount == 1) {
            await db.query('update "comment" set note = $1 where id = $2', [note, commentId])
            res.json({code: 0, text: 'Комментарий изменён'})
        } else {
            res.json({code: 1, text: 'Комментарий не найден'})
        }
    }

    async deleteComment(req, res) {
        const {commentId} = req.body
        const isThereComment = await db.query('select id from "comment" where id = $1', [commentId])
        if (isThereComment.rowCount == 1) {
            await db.query('delete from "comment" where id = $1', [commentId])
            res.json({code: 0, text: 'Комментарий удалён'})
        } else {
            res.json({code: 1, text: 'Комментарий не найден'})
        }
    }

    async getCommentsForPost(req, res) {
        const postId = req.params.postId
        const isTherePost = await db.query('select id from "post" where id = $1', [postId])
        if (isTherePost.rowCount == 0) {
            res.json({code: 1, text: 'Пост не найден'})
        } else {
            const comments = await db.query('select * from "comment" where post_id = $1', [postId])
            res.json({code: 0, text: 'Комментарии найдены', data: comments.rows})
        }
    }

    async getCountCommentsForPost(req, res) {
        const postId = req.params.postId
        const isTherePost = await db.query('select id from "post" where id = $1', [postId])
        if (isTherePost.rowCount == 0) {
            res.json({code: 1, text: 'Пост не найден'})
        } else {
            const commentsCount = await db.query('select count(*) from "comment" where post_id = $1', [postId])
            res.json({code: 0, text: 'Комментарии найдены', data: commentsCount.rows})
        }
    }

    async test(req, res) {
        res.json("123")
    }

}

module.exports = new CommentController()