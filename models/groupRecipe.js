const mongoose = require('mongoose')
const groupRecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instruction:{
        type: [String],
        required: true
    },
    ID: {
        type: String,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('groupRecipeCollection', groupRecipeSchema, 'groupRecipes')