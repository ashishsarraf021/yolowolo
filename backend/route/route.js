const express = require("express");
const app = express();
const User = require("../schema/schema"); // Import the User model

// Route handler for creating a new document
app.post("/create", async (req, res) => {
  try {
    console.log("code is here ------", req.body);
    // Currency number as the key
    const { currency } = req.body;

    // Values for the document
    const values = {
      "what really happend": "",
      "how do you feel now": "",
      "how may we help you": "",
      "how we can make it better": "",
      "are you happy": "",
      "are you upset": "",
      "are you ready": "",
      "first name": "",
      "middle name": "",
      "last name": "",
      "email address": "",
      "phone number": "",
    };

    // Create a new User document
    const newUser = new User({
      currency: currency,
      formDetails: values
    });

    // Save the document to the database
    await newUser.save();

    // Respond with success message
    res
      .status(201)
      .json({ message: "Document created successfully", data: newUser });
  } catch (error) {
    // Handle errors
    console.error("Error creating document:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/save", async (req, res) => {
  try {
    const data = req.body;
    console.log(data, "yahi data hai");
    let newUser = await User.findOne({currency: data.currency});
    console.log(newUser);
    if(!newUser){
        console.log('is code inside')
        res.send({
            code: 404,
            data: {},
            error: true
        })
        return;
    }
    const form = {
        "what really happend": data['what really happend'],
        "how do you feel now": data['how do you feel now'],
        "how may we help you": data['how may we help you'],
        "how we can make it better": data['how we can make it better'],
        "are you happy": data['are you happy'],
        "are you upset": data['are you upset'],
        "are you ready": data['are you ready'],
        "first name": data['first name'],
        "middle name": data['middle name'],
        "last name": data['last name'],
        "email address": data['email address'],
        "phone number": data['phone number']
    };
    console.log(form)
    newUser.formDetails = form;

    await newUser.save();
    res
      .status(201)
      .json({ message: "Document saved successfully", data: newUser });
  } catch (error) {}
});
module.exports = app;
