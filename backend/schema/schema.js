const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    "what really happend": String,
  "how do you feel now": String,
  "how may we help you": String,
  "how we can make it better": String,
  "are you happy": String,
  "are you upset": String,
  "are you ready": String,
  "first name": String,
  "middle name": String,
  "last name": String,
  "email address": String,
  "phone number": String
}, {strict: false})

// Define schema with desired keys and values
const userSchema = new mongoose.Schema({
  currency: { type: Number }, // Assuming currency is a required number field
  // Define other fields with their respective types
  formDetails: formSchema
}, { strict: false });

const user = mongoose.model('User', userSchema);

module.exports = user;
