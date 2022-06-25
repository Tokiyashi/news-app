const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {email, login, password, surname, name, age, avatar} = req.body
        const newUser = await db.query('INSERT INTO person (name, surname) values ($1, $2)', [name, surname])
        res.json('ok')
    }

}

module.exports = new UserController()