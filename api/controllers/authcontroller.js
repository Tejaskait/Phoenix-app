import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs';
export const signup= async (req,res) => {
    const { username, userpassword ,useremail} = req.body;
    const hashedPassword = bcryptjs.hashSync(userpassword, 10);
    const newUser = new User({username, userpassword: hashedPassword, useremail});
    try{
    await newUser.save()
    res.status(201).json('success');
    }catch(error){
        res.status(500).json({message: error.message});
    }
}; 