const mongoose = require('mongoose');
const schema = mongoose.Schema;

const message = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    message: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

const modelMessage = mongoose.model("Message", message);
module.exports = modelMessage;