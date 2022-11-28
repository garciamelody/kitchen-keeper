//handles intial GET request for the homepage
//handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const pantryController = require('../controllers/pantry')

router.post('/addItemEdit', pantryController.addItemEdit)
router.get('/edit', pantryController.getEdit)
router.put('/update/:id', pantryController.updatePantry)
router.delete('/delete/:id', pantryController.deletePantryItem)



module.exports = router