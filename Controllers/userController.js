const { findOneAndUpdate } = require("../Models/userSchema")
const users = require('../Models/userSchema')
//user registration
exports.registerUser=async (req,res)=>{
    const {username,email,phone,password}=req.body
    try{
        const existingUser = await users.findOne({ email: email })
        if (existingUser) {

            res.status(409).json("Account already exists. Please Login !!!")
        }
        else{
            console.log("User not found!!!")
            const newUser = new users({
                username: username,
                email: email,
                phone:phone,
                password: password
            })
            await newUser.save()
            res.status(201).json(`${username} Registered successfully`)
        }
    }
    catch(err){
        res.status(401).json("Register request failed due to", err)
    }
}
//user login
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    console.log("Inside login controller function", username, password);

    try {
        const existingUser = await users.findOne({ username: username, password: password });
        if (existingUser) {
            res.status(200).json({ success: true, message: "User exists" });
            console.log("User already exists");
        } else {
            res.status(406).json({ success: false, message: "Login failed due to invalid username or password" });
            console.log("User is not found");
        }
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ success: false, message: "Login failed", error: err });
    }
}
