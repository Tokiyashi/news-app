const db = require('../db')

class LikeController{

    async putLike(req, res) {
        var id = 0;
        const {userId, postId} = req.body
        const isThereUser = await db.query('select login from "user" where id = $1', [userId])
        const isTherePost = await db.query('select id from "post" where id = $1', [postId])
        if (isThereUser.rowCount == 1 && isTherePost.rowCount == 1) {
            const isThereLike = await db.query('select id from "like" where user_id = $1 AND post_id = $2', [userId, postId])
            if (isThereLike.rowCount == 1) {
                res.json({code: 2, text: 'Лайк уже стоит'})
            } else {
                const maxId = await db.query('SELECT max(id) FROM "like"')
                if (maxId.rows[0]['max'] || maxId.rows[0]['max'] == 0) {
                    id = maxId.rows[0]['max'] + 1
                } else {
                    id = 0
                }
                await db.query('insert into "like" values ($1, $2, $3)', [id, userId, postId])
                res.json({code: 0, text: 'Лайк поставлен'})
            }
        } else {
            res.json({code: 1, text: 'Пользователь или пост не найдены'})
        }
    }

    async removeLike(req, res) {
        var id = 0;
        const {userId, postId} = req.body
        const isThereUser = await db.query('select login from "user" where id = $1', [userId])
        const isTherePost = await db.query('select id from "post" where id = $1', [postId])
        if (isThereUser.rowCount == 1 && isTherePost.rowCount == 1) {
            const isThereLike = await db.query('select id from "like" where user_id = $1 AND post_id = $2', [userId, postId])
            if (isThereLike.rowCount == 1) {
                const maxId = await db.query('SELECT max(id) FROM "like"')
                if (maxId.rows[0]['max'] || maxId.rows[0]['max'] == 0) {
                    id = maxId.rows[0]['max'] + 1
                } else {
                    id = 0
                }
                await db.query('delete from "like" where id = $1', [isThereLike.rows[0]['id']])
                // // обновление id
                // const likeCount = await db.query('SELECT count(id) FROM "like"')
                // const likeIdArr = await db.query('SELECT id FROM "like" ORDER BY id')
                // for (var i = 0; i < likeCount.rows[0]['count']; i++) {
                //     await db.query('UPDATE "like" SET id = $1 WHERE id = $2', [i, likeIdArr.rows[i]['id']])
                // }
                res.json({code: 0, text: 'Лайк удалён'})
            } else {
                res.json({code: 2, text: 'Лайк не стоит'})
            }
        } else {
            res.json({code: 1, text: 'Пользователь или пост не найдены'})
        }
    }

    async getLikeCountOnPost(req, res) {
        const postId = req.params.postId
        const isTherePost = await db.query('select id from "post" where id = $1', [postId])
        if (isTherePost.rowCount == 1) {
            const likeCount = await db.query('select count(*) from "like" where post_id = $1', [postId])
            res.json({code: 0, text: 'Пост найден', data: {count: likeCount.rows[0]['count']}})
        } else {
            res.json({code: 1, text: 'Пост не найден'})
        }
    }

    async checkLike(req, res) {
        const {postId, userLogin} = req.params
        const isThereUser = await db.query('select id from "user" where login = $1', [userLogin])
        const isTherePost = await db.query('select id from "post" where id = $1', [postId])
        if (isThereUser.rowCount == 1 && isTherePost.rowCount == 1) {
            const isThereLike = await db.query('select id from "like" where user_id = $1 AND post_id = $2', [isThereUser.rows[0]['id'], postId])
            if (isThereLike.rowCount == 1) {
                res.json({code: 0, text: 'Лайк стоит'})
            } else {
                res.json({code: 2, text: 'Лайк не стоит'})
            }
        } else {
            res.json({code: 1, text: 'Пользователь или пост не найдены'})
        }
    }

    async test(req, res) {
        res.json("123")
    }

}

module.exports = new LikeController()