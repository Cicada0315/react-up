import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existUser = await UserModal.findOne({ email });
        if (!existUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existUser.password);

        if (!isPasswordCorrect){
            return res.status(400).json({ message: "Password doesn't match" });
        } 
        
        const token = jwt.sign({ email: existUser.email, id: existUser._id }, process.env.SECRET, { expiresIn: "1h" });

        res.status(200).json({ result: existUser, token });
    } catch (err) {
        res.status(500).json({ message: "Failed" });
    }
};

export const signup = async (req, res) => {
    const { email, password, cpassword ,firstName, lastName } = req.body;
  
    try {
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if(password !== cpassword){
            return res.status(400).json({ message: "Password doesn't match" });
        }
    
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Failed" });
    }
};