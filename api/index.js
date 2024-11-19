import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userroute.js';
import authRouter from './routes/authroute.js';
dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database');
}).catch(err => {
    console.error('Error connecting to database', err);
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.listen(3000, ()=> {
    console.log('listening on 3000!!');
});