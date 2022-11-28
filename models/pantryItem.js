const mongoose = require('mongoose')
const pantrySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemSize:{
        type: Number,
        required: true
    },
    itemSizeType:{
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemCategory:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('pantryCollection', pantrySchema, 'pantryItems')