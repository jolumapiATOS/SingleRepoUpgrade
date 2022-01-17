const User = require('../Models/user');
const Message = require('../Models/entryMessage');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


module.exports.indexPage = (req, res) => {
    const { name, accountGitHub } = req.body;

    try {
        const test = new User({ 
            _id: new mongoose.Types.ObjectId(),
            name: name,
            accountGitHub: accountGitHub
         })
         const token = jwt.sign({user: test._id}, process.env.SECRET, {
             expiresIn: "10h"
         });
        test.save().then( user => { console.log(user) });
    res.json({user: test, jwt: token})
    } catch (error) {
        console.log(error);
        res.status(404).json({notification: error})
    }
};

module.exports.newMessage = async (req, res) => {
    const { messageUser } = req.body;
    let auth = req.headers;
    if(!auth) {
        res.json({notification: "Man, you need to be logged in"});
    } 
    try {
        const verified = jwt.verify( req.headers.auth, process.env.SECRET );
        const userID = mongoose.Types.ObjectId(verified.user);
        const message = new Message({
            _id: new mongoose.Types.ObjectId(),
            message: messageUser,
            author: userID
        })
        message.save().then( message => { console.log(message) } )
        res.status(201).json( { notification: message })
    } catch (error) {
        res.json({notification: "You need to be logged in"})
    }
}

module.exports.experiment = (req, res) => {
    console.log(req.headers);
    res.json({success: "Te amo"})
}