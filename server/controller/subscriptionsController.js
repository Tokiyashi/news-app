const db = require('../db')

class SubscriptionsController{

    async checkSubscription(req, res) {
        const {login, followLogin} = req.params
        const loginId = await db.query('SELECT id FROM "user" where login = $1', [login])
        const followLoginId = await db.query('SELECT id FROM "user" where login = $1', [followLogin])
        if (loginId.rowCount == 0 || followLoginId.rowCount == 0) {
            res.json({code: 2, text: 'Пользователь не найден'})
        } else {
            const isThereSubscription = await db.query('SELECT id FROM "subscriptions" where user_id = $1 AND following_id = $2', [loginId.rows[0]['id'], followLoginId.rows[0]['id']])
            if (isThereSubscription.rowCount == 0) {
                res.json({code: 1, text: 'Подписка не оформлена'})
            } else {
                res.json({code: 0, text: 'Подписка оформлена'})
            }
        }
    }

    async subscribe(req, res) {
        var id = 0
        const {login, followLogin} = req.body
        const isThereUser = await db.query('SELECT id FROM "user" where login = $1', [login])
        const isThereFollowUser = await db.query('SELECT id FROM "user" where login = $1', [followLogin])

        if (isThereUser.rowCount == 0 || isThereFollowUser.rowCount == 0) {
            res.json({code: 1, text: 'Пользователь не найден'})
        } else {
            if (login == followLogin) {
                res.json({code: 2, text: 'Нельзя подписаться на самого себя'})
            } else {
                const isThereSubscription = await db.query('SELECT id FROM "subscriptions" where user_id = $1 AND following_id = $2', [isThereUser.rows[0]['id'], isThereFollowUser.rows[0]['id']])
                if (isThereSubscription.rowCount == 0) {
                    const maxId = await db.query('SELECT max(id) FROM "subscriptions"')
                    if (maxId.rows[0]['max'] || maxId.rows[0]['max'] == 0) {
                        id = maxId.rows[0]['max'] + 1
                    } else {
                        id = 0
                    }
                    await db.query('INSERT INTO "subscriptions" values ($1, $2, $3)', [id, isThereUser.rows[0]['id'], isThereFollowUser.rows[0]['id']])
                    res.json({code: 0, text: 'Подписка оформлена'})
                } else {
                    res.json({code: 3, text: 'Подписка уже оформлена'})
                }
            }
        }
    }

    async unsubscribe(req, res) {
        const {login, followLogin} = req.body
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

    async getFollowers(req, res) {
        const login = req.params.login
        const isThereUser = await db.query('select id from "user" where login = $1', [login])
        if (isThereUser.rowCount == 1) {
            const followers = await db.query('select user_id as id from "subscriptions" where following_id = $1', [isThereUser.rows[0]['id']])
            if (followers.rowCount == 0) {
                res.json({code: 1, text: 'На пользователя никто не подписан'})
            } else {
                res.json({code: 0, text: 'На пользователя кто-то подписан', data: followers.rows})
            }
        } else {
            res.json({code: 2, text: 'Пользователь не найден'})
        }
    }

    async getFollowings(req, res) {
        const login = req.params.login
        const isThereUser = await db.query('select id from "user" where login = $1', [login])
        if (isThereUser.rowCount == 1) {
            const followings = await db.query('select following_id as id from "subscriptions" where user_id = $1', [isThereUser.rows[0]['id']])
            if (followings.rowCount == 0) {
                res.json({code: 1, text: 'У пользователя нет подписок'})
            } else {
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

module.exports = new SubscriptionsController()