const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const mainController = require('../controllers/main')
const homeController = require('../controllers/home')
const recipeController = require('../controllers/recipe')
const groupController = require('../controllers/group')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/group', homeController.getGroup)
router.post('/groupLogin', authController.postGroupLogin)
router.get('/createGroup', homeController.getCreateGroup)
router.post('/signupGroup', authController.postSignupGroup)
router.get('/home', ensureAuth, mainController.getHome);
router.get('/groupRecipes', homeController.getGroupRecipes)
router.get('/groupHome', ensureAuth, homeController.getGroupHome)
router.get("/", homeController.getIndex);
router.get('/addRecipe', mainController.getAdd)
router.get('/myRecipes', recipeController.getRecipe)
router.get('/:id', mainController.getEdit)



module.exports = router