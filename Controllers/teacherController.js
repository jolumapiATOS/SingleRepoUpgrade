const { UserSchema, User } = require('../Models/user');
const Message = require('../Models/entryMessage');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

module.exports.getLastAdvancements = async (req, res) => {
    const auth = req.headers;
    if(!auth) {
        res.json({notification: "Not a valid user"})
    }
    const userID = jwt.verify(req.headers.auth, process.env.SECRET)
    console.log(userID)
    const users = await User.find({teachers: "61ee1392246e86a52321ea69" });
    console.log(users)
    let infos = []
    async function infoGet() {
        for(let i = 0; i<users.length; i++) {
            const res = await Message.find({ author: users[i]._id })
            infos.push(res);
        }
        return infos
    }
    infoGet().then( e => { res.json({i: "ready", e: e}) })
}

module.exports.getAllTeachers = async (req, res) => {
    const users = await User.find({ teacher: true })
    res.json({ teachers: users });
}