const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const User = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    teacher:  {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

User.static('hash', async function(user, password) {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash( password, salt );
    user.password = hash;
    return user;
})

User.static('verify', async function(user, password) {
    const verified = await bcrypt.compare( password, user.password );
    return verified;
})

const modelUser = mongoose.model( 'User', User );
module.exports = modelUser;