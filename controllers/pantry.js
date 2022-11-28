const PantryItem = require('../models/pantryItem')

module.exports = {
    addItemEdit: async (req, res)=>{
        const pantryItem = new PantryItem(
            {
                itemName: req.body.itemName,
                itemQuantity: req.body. itemQuantity,
                itemCategory: req.body.itemCategory,
                itemSize: req.body.itemSize,
                itemSizeType: req.body.itemSizeType,
                user: req.user.id,
            })
        try{
            await pantryItem.save()
            res.redirect('/pantry/edit')
        }catch(err){
            console.log(err)
        }
    },
    getEdit: async (req, res) => {
        try {
          const id = req.params.id
          const pantryItems = await PantryItem.find({ user: req.user.id });
          res.render("editPantry.ejs", { pantryCollection: pantryItems, user:req.user, id: id });
        } catch (err) {
          console.log(err);
        }
    },
    updatePantry: (req,res) => {
        //pulling the id out of the request and assigning it to a variable 
        const id = req.params.id
        //finds the document by its id and updates it
        PantryItem.findByIdAndUpdate(
            id,
            {
                itemName: req.body.itemName,
                itemQuantity: req.body. itemQuantity,
                itemCategory: req.body.itemCategory,
                itemSize: req.body.itemSize,
                itemSizeType: req.body.itemSizeType,
                user: req.user.id,
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect('/pantry/edit')
            })
    },
    deletePantryItem: (req,res) => {
        const id = req.params.id
        PantryItem.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect('/pantry/edit')
        })
    },
}