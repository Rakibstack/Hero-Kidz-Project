import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const HandleSignIn = () => {
        // Handle Google Sign-In logic here
        const result = signIn('google', { redirect: false})
        console.log(result);
        
    }


    return (
        <div>
             <button onClick={HandleSignIn} className="btn btn-outline w-full mb-3 gap-2 rounded-xl">
            <FaGoogle />
            Continue with Google
          </button>
            
        </div>
    );
};

export default SocialLogin;