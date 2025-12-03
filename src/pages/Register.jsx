import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import { FaGoogle, FaEye, FaEyeSlash  } from "react-icons/fa";
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
const googleProvider = new GoogleAuthProvider()

const Register = () => { 
  const {auth, createUser,setUser, updateUser} = use(AuthContext)

  const [showPassword,setShowPassword] = useState(false)
    const handleGoogleSignin = () => {
    signInWithPopup(auth,googleProvider)
    .then(res=>{
           Swal.fire("google signin Successfull")
           setUser(res.user)
         })
         .catch(err=>{
           Swal.fire(err.message)
         })
   };
  const togglePassword=()=>{
  setShowPassword(!showPassword)
  }
  const navigate = useNavigate()
  const handleRegister =(e)=>{
e.preventDefault()
const form = e.target
const name = form.name.value
const email = form.email.value
const photo = form.photo.value
const password = form.password.value
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
 if(!passwordRegex.test(password)){
    Swal.fire("Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter")
    return
  }
    createUser(email,password)
.then((res)=>{
  const user = res.user;
  updateUser({displayName:name,photoURL:photo})
.then(()=>{
  setUser({...user,displayName:name,photoURL:photo})
  navigate("/")
}).catch((error)=>{
  setUser(user)
  Swal.fire(error.message)
})
}).catch(e=>{
  Swal.fire(e.code)
})}
 
  
    return (
      
    
 <div>
   <title>Tytopia-Register</title>
        <form onSubmit={handleRegister} className='bg-gray-100 p-4 my-10 md:w-[550px]  mx-auto'>

            <div className='mb-4'>
             <label>Name</label><br />
            <input  name='name' className=' text-gray-400 w-full border border-gray-400 px-3 py-2 rounded' type="name" placeholder='Enter Your Name'/>
           </div> 
           <div className='mb-4'>
             <label>Email</label><br />
            <input  name='email' className=' text-gray-400 w-full border border-gray-400 px-3 py-2 rounded' type="email" placeholder='Enter Your Email'/>
           </div>
            <div className='mb-4'>
             <label>Photo</label><br />
            <input  name='photo' className=' text-gray-400 w-full border border-gray-400 px-3 py-2 rounded' type="text" placeholder='Paste photo URL'/>
           </div>
             <div className="mb-4">
      <label>Password</label><br />

      <div className="relative">
        <input name="password" type={showPassword?'text' :'password'} placeholder="Enter Password" className="text-gray-400 w-full border border-gray-400 px-3 py-2 pr-10 rounded"
        />
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500" onClick={togglePassword}
        >
          {
          showPassword ? <FaEyeSlash /> : <FaEye />
          }
        </div>
      </div>
    </div>
        
           <button className= 'my-4 bg-black text-white w-full py-2 '> Register</button>
         
             <button onClick={handleGoogleSignin} className= 'my-4  bg-white border-1 font-semibold w-full py-2 '>
 <div className='flex items-center justify-center gap-3'>
  Login with Google <FaGoogle />
 </div></button>
         
           <p>Already Have an account? Please <Link to='/login' className='text-blue-600'>Login</Link></p>
        </form>
       </div>

    );
};

export default Register;