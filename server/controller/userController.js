const db = require('../db')
const Uuid = require('uuid')

class UserController {
    async createUser(req, res) {
        const err = {
            code: 0,
            text: 'Успех'
        }
        // загрузка файла в папку static
        const file = req.files.avatar
        const avatarName = Uuid.v4() + ".jpg"
        const path = "/Users/vlad/Documents/GitHub/news-app/server/static/" + avatarName
        file.mv(path)
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
               [id, email, login, password, surname, name, age, avatarName, 'Мой статус'])
        }
        res.json(err)
    }

    async checkUser(req, res) {
        const {emailOrLogin, password} = req.body
        const isThereUser = await db.query('SELECT login, password FROM "user" where email = $1 OR login = $1', [emailOrLogin])
        if (isThereUser.rowCount == 0) {
            res.json({code: 1, text: 'Пользователь не найден'})
        } else {
            if (isThereUser.rows[0]['password'] == password) {
               res.json({code: 0, text: 'Авторизация выполнена'})
            } else {
               res.json({code: 2, text: 'Неверный пароль'})
            }
        }
    }


}

module.exports = new UserController()