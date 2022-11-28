module.exports = {
  // this is where the group login keeps getting stuck and redirected to '/'
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  