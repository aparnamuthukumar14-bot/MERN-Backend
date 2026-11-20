const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    fullName:{type: String,required: true},
    email:{type: String,required: true},
    phone:{type: String,required: true},
    role:{type: String,default:"user"},
    password:{type: String,required: true},
    confirmPassword:{type: String,required: true},
});

module.export = Mongoose.model("User,UserSchema")