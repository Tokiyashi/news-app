const db = require('../db')

class PostController{

    async createPost(req, res) {
        var id = 0
        const {userId, text} = req.body
        const isThereUser = await db.query('select login from "user" where id = $1', [userId])
        if (isThereUser.rowCount == 1) {
            const maxId = await db.query('SELECT max(id) FROM "post"')
            if (maxId.rows[0]['max'] || maxId.rows[0]['max'] == 0) {
                id = maxId.rows[0]['max'] + 1
            } else {
                id = 0
            }
            await db.query('insert into "post" values ($1, $2, current_date, $3) ', [id, userId, text])
            res.json({code: 0, text: 'Пост опубликован'})
        } else {
            res.json({code: 2, text: 'Пользователь не найден'})
        }
    }

    async deletePost(req, res) {
        const id = req.body.id
        const isTherePost = await db.query('select user_id from "post" where id = $1', [id])
        if (isTherePost.rowCount == 1) {

        } else {

        }
        const loginId = await db.query('SELECT id FROM "user" where login = $1', [login])
        const followLoginId = await db.query('SELECT id FROM "user" where login = $1', [followLogin])
        if (loginId.rowCount == 0 || followLoginId.rowCount == 0) {
            res.json({code: 2, text: 'Пользователь не найден'})
        } else {
            const isThereSubscription = await db.query('SELECT id FROM "subscriptions" where user_id = $1 AND following_id = $2', [loginId.rows[0]['id'], followLoginId.rows[0]['id']])
            if (isThereSubscription.rowCount == 0) {
                res.json({code: 1, text: 'Подписка не оформлена'})
            } else {
                await db.query('DELETE FROM "subscriptions" where id = $1', [isThereSubscription.rows[0]['id']])
                res.json({code: 0, text: 'Подписка удалена'})
            }
        }
    }

    async test(req, res) {
        res.json("123")
    }

}

module.exports = new PostController()