const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const mainController = require('../controllers/main')
const homeController = require('../controllers/home')
const recipeController = require('../controllers/recipe')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/home', ensureAuth, mainController.getHome);
router.get("/", homeController.getIndex);
router.get('/addRecipe', mainController.getAdd)
router.get('/myRecipes', recipeController.getRecipe)
router.get('/:id', mainController.getEdit)

module.exports = router