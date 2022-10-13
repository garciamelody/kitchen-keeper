const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: {type: String,}
})

// Password hash middleware.
GroupSchema.pre('save', function save(next) {
  const group = this
  if (!group.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(group.password, salt, (err, hash) => {
      if (err) { return next(err) }
      group.password = hash
      next()
    })
  })
})

// Helper method for validating group password.
GroupSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}



module.exports = mongoose.model('Group', GroupSchema)
