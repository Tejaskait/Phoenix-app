import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userroute.js'
dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database');
}).catch(err => {
    console.error('Error connecting to database', err);
})

app.use('/api/user',userRouter);

app.listen(3000, ()=> {
    console.log('listening on 3000!!');
});