const mongoose = require('mongoose');
const schema = mongoose.Schema;


const messageSchema = new schema({
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

const Message = mongoose.model("Message", messageSchema);
module.exports = {messageSchema, Message};