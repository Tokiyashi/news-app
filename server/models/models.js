const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    age: {type: DataTypes.INTEGER},
    avatar: {type: DataTypes.STRING, allowNull: false},
    quote: {type: DataTypes.STRING},
    registrationDate: {type: DataTypes.DATEONLY},
})

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // FK user_id
    publicationDate: {type: DataTypes.DATEONLY},
    text: {type: DataTypes.STRING},
})

const Like = sequelize.define('like', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // FK user_id
    // FK post_id
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // FK user_id
    // FK post_id
    note: {type: DataTypes.STRING},
})

const Subscriptions = sequelize.define('subscriptions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // FK user_id
    followingId: {type: DataTypes.INTEGER}
})

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Like)
Like.belongsTo(User)

Post.hasMany(Like)
Like.belongsTo(Post)

User.hasMany(Comment)
Comment.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.hasMany(Subscriptions)
Subscriptions.belongsTo(User)

module.exports = {
    User,
    Post,
    Like,
    Comment,
    Subscriptions
}

