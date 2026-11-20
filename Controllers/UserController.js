const user = require("../Models/UserModel");

const SignupUser = async (req,res) => {
    try{
        const {fullName,email,phone,role,password,confirmPassword} = req.body;

        const newUser = new user({
            fullName,
            email,
            phone,
            role,
            password,
        });

        const saverUser = await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            user : savedUser
        });

    } catch (error) ({
        res.status(402): "Error creating userr",
        error: error.message
    });
}

module.exports = {
    SignupUser
};