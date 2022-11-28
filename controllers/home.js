const PantryItem = require('../models/pantryItem')

module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getPantry: async (req, res) => {
      try {
        const pantryItems = await PantryItem.find({ user: req.user.id });
        res.render("allPantry.ejs", {pantryCollection:pantryItems, user:req.user});
      } catch (err) {
        console.log(err);
      }
    }
}
