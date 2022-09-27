//handles intial GET request for the homepage
//handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

//add specific routes for specific tasks
router.get('/:id', recipeController.getEdit)
router.post('/createRecipe', recipeController.createRecipe)
router.put('/update/:id', recipeController.updateRecipe)
router.delete('/remove/:id', recipeController.deleteRecipe)


module.exports = router