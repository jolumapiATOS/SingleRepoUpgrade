const User = require('../Models/user');
const Message = require('../Models/entryMessage');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


module.exports.indexPage = async (req, res) => {
    const { name, password, teacher, teacherID } = req.body;
    try {
        const test = new User({ 
            _id: new mongoose.Types.ObjectId(),
            name: name,
            password: password,
            teacher: (teacher) ? true : false,
            teachers: teacherID
         })
         const token = jwt.sign({user: test._id}, process.env.SECRET, {
             expiresIn: "10h"
         });
        await User.hash(test, password);
        test.save().then( user => { console.log(user) });
    res.json({user: test, jwt: token})
    } catch (error) {
        console.log(error);
        res.status(404).json({notification: error})
    }
};

module.exports.newMessage = async (req, res) => {
    const { messageUser } = req.body;
    console.log( req.body )
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
    res.json({success: "App successfully running"})
}

module.exports.getMessages = async(req, res) => {
    let auth = req.headers;
    const verified = jwt.verify( req.headers.auth, process.env.SECRET )
    const messages = await Message.find( {author: verified.user} )
    const reverse = messages.reverse()
    console.log(reverse)
    res.status(200).json({ messages: reverse })
}

module.exports.login = async (req, res) => {
    const { name, password } = req.body;
    try {
        const users = await User.find({name: name});
        const user = users.pop();
        if(!user) {
            res.json({ notification: "User not found" })    
        }
        const verified = await User.verify(user, password);
        if(verified){
            const token = jwt.sign({user: user._id}, process.env.SECRET, { expiresIn: "10h" })
            res.json({ notification: "User authenticated", jwt: token  })
        } else {
            res.json({ notification: "User not found" })
        }
    } catch (error) {
        console.log(error)
    }
}