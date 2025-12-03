import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import { use } from 'react';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
     const {auth} = use(AuthContext)
    const location = useLocation()

    const [email,setEmail] = useState(location?.state?.email)

    const handleResetPassword = ()=>{
        if(!email){
            Swal.fire("please enter email")
            return
        }

         sendPasswordResetEmail(auth, email)
    .then(() => {
      Swal.fire({title: "Success!",text: "Password reset email has been sent!", icon: "success", confirmButtonText: "Go to Gmail"
      }).then(() => {
        window.open("https://mail.google.com", "_blank");
      });
    })
    .catch(error => {
      Swal.fire({title: "Error",text: error.message, icon: "error" });
    });
        
    }
    return (
        <div>
            <h3 className='text-center py-6 font-semibold text-teal-500 text-xl'>Reset Password</h3>
            <form className=' mb-8 bg-gray-100 p-4'>
                  <div className='mb-4'>

             <label>Email</label><br />
              <input name='email'  className=' text-gray-400 w-full border border-gray-400 px-3 py-2 rounded' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' />
          
           </div>
             <button type='button' className='mt-4 bg-purple-400 text-white py-1 px-2 rounded-2xl ' onClick={handleResetPassword}>Reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;