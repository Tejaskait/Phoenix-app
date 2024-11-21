import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    userpassword: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true, 
        unique: true
    },
    avatar: {
        type: String,
        default: "/src/components/defalt.png"
    },
}, 
    {
        timestamps: true,
    }
);

const User= mongoose.model('User',userSchema);
export default User;