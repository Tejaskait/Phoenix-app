import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs';
import errorHandler from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

export const signin = async (req,res,next) => {
    const{ useremail, userpassword}=req.body;
    try {
        const validUser = await User.findOne({useremail});
        if (!validUser) 
            return next(errorHandler(404,'user not found'));
        const validUserPassword = bcryptjs.compareSync(userpassword,validUser.userpassword);    
        if (!validUserPassword) return next(errorHandler(401,'wrong credentials'));
        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET);
        const {userpassword: pass, ...rest}=validUser._doc;
        res
        .cookie('access_token',token,{httpOnly: true})
        .status(200)
        .json(rest);
    } catch (error) {
        next(error);
    }
};

export const google = async(req, res,next) => {
    try {
        const user  = await User.findOne({useremail: req.body.email});
        if (user) {
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET);
            const {userpassword: pass,...rest}=user._doc;
            res
           .cookie('access_token',token,{httpOnly: true})
           .status(200)
           .json(rest);
        }
        else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword ,10);
            const newUser = new User({username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4) ,useremail: req.body.email, userpassword: hashedPassword, avatar: req.body.photo});
            await newUser.save();
            const token = jwt.sign({id: newUser._id},process.env.JWT_SECRET);
            const {userpassword: pass,...rest}=newUser._doc;
            res.cookie('access_token',token, {httpOnly: true}).status(200).json(rest);
        }
    } catch (error) {
        next(new Error(`Google Auth Error: ${error.message}`));

    }
}