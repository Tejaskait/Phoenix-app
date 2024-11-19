import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    userpassword: {
        type: String,
        required: true,
    },
    useremail: {
        type: String,
        required: true,
        unique: true,
    },
    userrole: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    userisActive: {
        type: Boolean,
        default: true,
    },
    usercreatedAt: {
        type: Date,
        default: Date.now,
    },
    userupdatedAt: {
        type: Date,
        default: Date.now,
    },
    userbranch: {
        type: String,
        required: true,
    },
    userdepartment: {
        type: String,
        required: true,
    },
    userbirthdate: {
        type: String,
        required: true,
    },
    usercontact: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true,
    }
);

const User= mongoose.model('User',userSchema);
export default User;