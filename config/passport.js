const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const Group = require('../models/group')

module.exports = function (passport) {
  passport.use('user-local',new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { msg: `Email ${email} not found.` })
      }
      if (!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, { msg: 'Invalid email or password.' })
      })
    })
  }))
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })

  passport.use('group-local',new LocalStrategy(
    (username, password, done) => {
    Group.findOne({ username: username}, (err, group) => {
      if (err) { return done(err) }
      if (!group) {
        return done(null, false, { msg: ` ${username} not found.` })
      }
      if (!group.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }
        group.comparePassword(password, (err, isMatch) => {
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, group)
        }
        return done(null, false, { msg: 'Invalid ID or password.' })
      })
    })
  }))
}
