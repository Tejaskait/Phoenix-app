import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs';
export const signup= async (req,res,next) => {
    const { username, userpassword ,useremail} = req.body;
    const hashedPassword = bcryptjs.hashSync(userpassword, 10);
    const newUser = new User({username, userpassword: hashedPassword, useremail});
    try{
    await newUser.save()
    res.status(201).json('success');

    }catch(error){
       next(error);
    }
}; 