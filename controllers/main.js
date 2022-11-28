const Recipe = require('../models/recipe')

module.exports = {
    getHome: async (req, res) => {
        try{
            const recipes = await
            Recipe.find()
            res.render('home.ejs', {recipeCollection: recipes, user: req.user })
        }catch (err){
            if (err) return res.status(500).send(err)
        }
    },
    getAdd : async (req, res) => {
        try{
            const recipes = await
            Recipe.find()
            res.render('addRecipe.ejs', {recipeCollection: recipes})
        }catch (err){
            if (err) return res.status(500).send(err)
        }
    },
    getRecipe : async (req, res) => {
        try{
            const recipes = await
            Recipe.find()
            res.render('recipes.ejs', {recipeCollection: recipes})
        }catch (err){
            if (err) return res.status(500).send(err)
        }
    },
    getEdit: (req,res) => {
        //grabbing the id out of the route    
        const id = req.params.id
        Recipe.find({}, (err, recipes) => {
            res.render('edit.ejs', {
            recipeCollection:recipes, idRecipe: id })
        })
    },
}