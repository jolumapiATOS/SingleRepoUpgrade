const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    accountGitHub: String
}, {
    timestamps: true,
    versionKey: false
})

const modelUser = mongoose.model( 'User', User );
module.exports = modelUser;