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
            res.json({code: 1, text: 'Пользователь не найден'})
        }
    }

    async deletePost(req, res) {
        const id = req.body.id
        const isTherePost = await db.query('select user_id from "post" where id = $1', [id])
        if (isTherePost.rowCount == 1) {
            // добавить удаление коментов и лайков

            await db.query('delete from "post" where id = $1', [id])
            // обновление id
            const postCount = await db.query('SELECT count(id) FROM "post"')
            const postIdArr = await db.query('SELECT id FROM "post" ORDER BY id')
            for (var i = 0; i < postCount.rows[0]['count']; i++) {
                await db.query('UPDATE "post" SET id = $1 WHERE id = $2', [i, postIdArr.rows[i]['id']])
            }
            res.json({code: 0, text: 'Пост удалён'})
        } else {
            res.json({code: 1, text: 'Пост с таким id не найден'})
        }
    }

    async getPostById(req, res) {
        const id = req.params.id
        const isTherePost = await db.query('select id, user_id, to_char(publicationdate,\'dd-mm-yyyy\') as publicationdate, text from "post" where id = $1', [id])
        if (isTherePost.rowCount == 1) {
            res.json({code: 0, text: 'Пост найден', data: isTherePost.rows[0]})
        } else {
            res.json({code: 1, text: 'Пост с таким id не найден'})
        }
    }

    async getPostsByUserId(req, res) {
        const userId = req.params.userId
        const isTherePost = await db.query('select id, user_id, to_char(publicationdate,\'dd-mm-yyyy\') as publicationdate, text from "post" where user_id = $1', [userId])
        if (isTherePost.rowCount == 0) {
            res.json({code: 1, text: 'У пользователя нет постов'})
        } else {
            res.json({code: 0, text: 'Пост найден', data: isTherePost.rows})
        }
    }

    async getPosts(req, res) {
        const posts = await db.query('select id, user_id, to_char(publicationdate,\'dd-mm-yyyy\') as publicationdate, text from "post"')
        if (posts.rowCount == 0) {
            res.json({code: 1, text: 'Постов нет'})
        } else {
            res.json({code: 0, text: 'Посты найдены', data: posts.rows})
        }
    }
    async getPostsOrderByDateASC(req, res) {
        const posts = await db.query('select id, user_id, to_char(publicationdate,\'dd-mm-yyyy\') as publicationdate, text from "post" ORDER BY "publicationdate" asc')
        if (posts.rowCount == 0) {
            res.json({code: 1, text: 'Постов нет'})
        } else {
            res.json({code: 0, text: 'Посты найдены', data: posts.rows})
        }
    }
    async getPostsOrderByDateDESC(req, res) {
        const posts = await db.query('select id, user_id, to_char(publicationdate,\'dd-mm-yyyy\') as publicationdate, text from "post" ORDER BY "publicationdate" desc')
        if (posts.rowCount == 0) {
            res.json({code: 1, text: 'Постов нет'})
        } else {
            res.json({code: 0, text: 'Посты найдены', data: posts.rows})
        }
    }

    async getPostsFromSubscriptions(req, res) {
        const login = req.params.login
        const isThereUser = await db.query('select id from "user" where login = $1', [login])
        if (isThereUser.rowCount == 1) {
            const followings = await db.query('select following_id as id from "subscriptions" where user_id = $1', [isThereUser.rows[0]['id']])
            if (followings.rowCount == 0) {
                res.json({code: 1, text: 'У пользователя нет подписок'})
            } else {
                for (var i = 0; i < followings.rowCount; i++) {
                    const posts = await db.query('select id, user_id, to_char(publicationdate,\'dd-mm-yyyy\') as publicationdate, text from "post" where user_id = $1', [followings.rows[i]['id']])
                    followings.rows[i]['posts'] = posts.rows
                }
                res.json({code: 0, text: 'У пользователя есть подписки', data: followings.rows})
            }
        } else {
            res.json({code: 2, text: 'Пользователь не найден'})
        }
    }

    async test(req, res) {
        res.json("123")
    }

}

module.exports = new PostController()