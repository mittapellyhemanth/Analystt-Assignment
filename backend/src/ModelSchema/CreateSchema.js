const express = require("express");
const mongoose = require("mongoose");

const AssignData = mongoose.Schema({
  
  name: { type: String },
  username: { type: String },
  email: { type: String },

  address: {
    street: { type: String },
    suite: { type: String },
    city: { type: String },
    zipcode: { type: String },
    geo: {
      lat: { type: String },
      lng: { type: String },
    },
  },
  phone: { type: String },
  website: { type: String },
  company: {
    name: { type: String },
    catchPhrase: { type: String },
    bs: { type: String },
  },
});

const datamodel = mongoose.model("AssignData", AssignData);
module.exports = datamodel;
