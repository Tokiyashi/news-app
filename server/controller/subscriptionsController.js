const db = require('../db')

class SubscriptionsController{

    async subscribe(req, res) {
        const {login, followLogin} = req.body
        res.json({login: login, followLogin: followLogin})
    }

    async unsubscribe(req, res) {
        var {name, surname} = req.params
        res.json("123")
    }

    async getFollowers(req, res) {
        var {name, surname} = req.params
        res.json("123")
    }

    async getFollowings(req, res) {
        var {name, surname} = req.params
        res.json("123")
    }

    async test(req, res) {
        res.json("123")
    }

    // async getUserByName(req, res) {
    //     var {name, surname} = req.params
    //     name = name+'%'
    //     surname = surname+'%'
    //     const user = await db.query('SELECT id, email, login, surname, name, age, avatar, quote, registrationdate FROM "user" where name like $1 and surname like $2', [name, surname])
    //     if (user.rowCount == 0) {
    //         res.json({code: 1, text: 'Пользователь не найден'})
    //     } else {
    //         res.json({code: 0, text: 'Пользователь найден', data: user.rows[0]})
    //     }
    // }
}

module.exports = new SubscriptionsController()