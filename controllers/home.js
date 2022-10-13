module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getGroup: (req, res) => {
      res.render("group.ejs");
    },
    getGroupHome: (req, res) => {
      res.render('groupHome.ejs', {user: req.user })
    },
    getGroupRecipes: (req, res) => {
      res.render('groupRecipes.ejs')
    },
    getCreateGroup: (req,res) => {
      res.render('createGroup.ejs')
    },
  };