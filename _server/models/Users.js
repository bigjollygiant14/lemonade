'use strict'

const mongoose = require('mongoose')

let UsersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  admin: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Users', UsersSchema)
