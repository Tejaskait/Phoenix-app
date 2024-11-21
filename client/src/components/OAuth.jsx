import React from 'react'
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,email: result.user.email,
                    photo: result.user.photoURL
                }),

            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log('could not connect to Google',error);
        }
    };

  return (
    <button onClick={handleGoogleClick} type='button' className="flex gap-5 items-center font-nmregular px-10 py-6 bg-zinc-900 rounded-full tracking-tighter mt-5 text-white ">
            
              <li className=" uppercase hover:underline">google</li>
            
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
  )
}
