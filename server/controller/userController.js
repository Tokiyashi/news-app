const db = require('../db')
const Uuid = require('uuid')

class UserController {
    async createUser(req, res) {
        const err = {
            code: 0,
            text: 'Успех'
        }
        // загрузка файла в папку static
        // const file = req.files.avatar
        // const avatarName = Uuid.v4() + ".jpg"
        // const path = __dirname.slice(0, -10) + "static/" + avatarName
        // file.mv(path)
        // валидация остальных данных
        const {email, login, password, surname, name, age} = req.body
        const isThereUser = await db.query('SELECT count(*) FROM "user" where email = $1 OR login = $2', [email, login])
        if (isThereUser.rows[0]['count'] != "0") {
            err.code = 1
            err.text = 'Такой логин/email уже существует'
        }
        var id = 0
        if (err.code == 0) {
            const maxId = await db.query('SELECT max(id) FROM "user"')

            if (maxId.rows[0]['max'] || maxId.rows[0]['max'] == 0) {
                id = maxId.rows[0]['max'] + 1
            } else {
                id = 0
            }
            await db.query('INSERT INTO "user" values ($1, $2, $3, $4, $5, $6, $7, $8, $9, current_date)',
               [id, email, login, password, surname, name, age, 'defaultAvatar.jpeg', 'Мой статус'])
        }
        res.json(err)
    }

    async checkUser(req, res) {
        const {id, password} = req.body
        const isThereUser = await db.query('SELECT id, login, password FROM "user" where email = $1 OR login = $1', [emailOrLogin])
        if (isThereUser.rowCount == 0) {
            res.json({code: 1, text: 'Пользователь не найден'})
        } else {
            if (isThereUser.rows[0]['password'] == password) {
               res.json({code: 0, text: 'Авторизация выполнена', data:  {id: isThereUser.rows[0]['id'], login: isThereUser.rows[0]['login']}})
            } else {
               res.json({code: 2, text: 'Неверный пароль'})
            }
        }
    }

    async getUserById(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT id, email, login, surname, name, age, avatar, quote, registrationdate FROM "user" where id = $1', [id])
        if (user.rowCount == 0) {
            res.json({code: 1, text: 'Пользователь не найден'})
        } else {
            res.json({code: 0, text: 'Пользователь найден', data: user.rows[0]})
        }
    }

    async getUserByLogin(req, res) {
        const login = req.params.login
        const user = await db.query('SELECT id, email, login, surname, name, age, avatar, quote, registrationdate FROM "user" where login = $1', [login])
        if (user.rowCount == 0) {
            res.json({code: 1, text: 'Пользователь не найден'})
        } else {
            res.json({code: 0, text: 'Пользователь найден', data: user.rows[0]})
        }
    }

    async getUserByName(req, res) {
        var {name, surname} = req.params
        name = name+'%'
        surname = surname+'%'
        const user = await db.query('SELECT id, email, login, surname, name, age, avatar, quote, registrationdate FROM "user" where name like $1 and surname like $2', [name, surname])
        if (user.rowCount == 0) {
            res.json({code: 1, text: 'Пользователь не найден'})
        } else {
            res.json({code: 0, text: 'Пользователь найден', data: user.rows[0]})
        }
    }


    async test(req, res) {
        res.json(__dirname.slice(0, -10) + 'static/')
    }

}

module.exports = new UserController()