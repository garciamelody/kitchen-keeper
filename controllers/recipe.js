const Recipe = require('../models/recipe')

module.exports = {
    getEdit: (req,res) => {
        //grabbing the id out of the route    
        const id = req.params.id
        Recipe.find({}, (err, recipes) => {
            res.render('recipeCard.ejs', {
            recipeCollection:recipes, idRecipe: id })
        })
    },
    getRecipe: async (req, res) => {
        try {
          const recipes = await Recipe.find({ user: req.user.id });
          res.render("recipes.ejs", { recipeCollection:recipes, user:req.user });
        } catch (err) {
          console.log(err);
        }
    },
    createRecipe: async (req, res)=>{
        const recipe = new Recipe(
            {
                title: req.body.title,
                ingredients: req.body.ingredients,
                instruction: req.body.instruction,
                user: req.user.id,
            })
        try{
            await recipe.save()
            console.log(recipe)
            res.redirect('/myRecipes')
        }catch(err){
            console.log(err)
        }
    },
    deleteRecipe: (req,res) => {
        //grabbing the id out of the route
        const id = req.params.id
        //goes to the database, finds the id and deletes it
        Recipe.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            //redirects to the home page 
            res.redirect('/myRecipes')
        })
    },
    updateRecipe: (req,res) => {
        //pulling the id out of the request and assigning it to a variable 
        const id = req.params.id
        //finds the document by its id and updates it
        Recipe.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                ingredients: req.body.ingredients,
                instruction: req.body.instruction,
                user: req.user.id,
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect(`/recipe/${id}`)
            })
    },
}