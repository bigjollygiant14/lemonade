'use strict';

const mongoose = require( 'mongoose' );

let TripsSchema = new mongoose.Schema({
  start_date: Date,
  end_date: Date,
  description: String,
  notes: String,
  title: String,
  owner_id: Number, // ref to user.id
  created: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Trips', TripsSchema );