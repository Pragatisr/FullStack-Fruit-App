const express = require('express')
const bcrypt = require("bcrypt");
const cors = require('cors')
const app = express()
const { USER } = require('../model/user.schema')
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(express.json())
const signup = async (req, res) => {
    const {name,email,password} = req.body
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    USER.findOne({email:email})
    .then(user=>{
        if(user){
            res.json("Already have an account")
        }else{
            USER.create({name:name,email:email,password:hashedPassword})
            .then(()=>res.json("Account created"))
            .catch(err=>res.json(err))
        }
    }).catch(err=>res.json(err))
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await USER.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const payload = { id: user._id, email: user.email };

    const token = jwt.sign(payload, "mysecretkey", { expiresIn: "1h" });

    res.json({ success: true, token,status:200 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { signup,login }