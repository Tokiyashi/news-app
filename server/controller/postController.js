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

    async test(req, res) {
        res.json("123")
    }

}

module.exports = new PostController()