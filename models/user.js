var mongoose = require("mongoose");
var passporLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(passporLocalMongoose);

module.exports = mongoose.model("User", userSchema);