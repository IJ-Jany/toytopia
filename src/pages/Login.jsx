import React, { use, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import { useLocation } from 'react-router';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
const googleProvider = new GoogleAuthProvider()


const Login = () => {
  const emailRef = useRef(null)

  const [error,setError] = useState("")
  const {logIn,auth,setUser} = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

   const handleGoogleSignin = () => {
   signInWithPopup(auth,googleProvider)
   .then(res=>{
          Swal.fire("google signin Successfull")
          setUser(res.user)
          navigate("/")
        })
        .catch(err=>{
          Swal.fire(err.message)
        })
  };
  const handleLogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logIn(email,password)
        .then(res=>{
          const user = res.user
          Swal.fire('login success')
          console.log(user)
          navigate(`${location.state? location.state : "/"}`)
        }).catch(error=>{
          setError(error.code)
        })

          }

    const handleForgetPassword =()=>{
    const email = emailRef.current.value
    // if(!email){
    //   Swal.fire("please enter your email")
    //   return
    // }
    // sendPasswordResetEmail(auth,email)
    // .then(()=>{
    //   Swal.fire("check your email to reset")
    // }).catch(error=>{
    //   Swal.fire(error.message)
    // })
    navigate("/forgetpassword",{state:{email}})
  }
    return (
      <div >
 <div>
   <title>Tytopia-Login</title>
        <form onSubmit={handleLogin}  className='bg-gray-100 p-4 my-10 md:w-[550px]  mx-auto'>
            
           <div className='mb-4'>
             <label>Email</label><br />
            <input ref={emailRef}  name='email' className=' text-gray-400 w-full border border-gray-400 px-3 py-2 rounded' type="email" placeholder='Enter Your Email'/>
           </div>
           <div className='mb-4'>
             <label>Password</label><br />
            <input name='password' className=' text-gray-400 w-full border border-gray-400 px-3 py-2 rounded' type="text" placeholder='Enter Password'/>
           </div>
           <button className='text-blue-800' onClick={handleForgetPassword}>Forget Password?</button>
             {error && <p className='text-sm text-red-600'>{error}</p>}
           <button className= 'my-4 bg-black text-white w-full py-2 '> Login</button>
         
             <button  onClick={handleGoogleSignin} className= 'my-4  bg-white border-1 font-semibold w-full py-2 '>
 <div className='flex items-center justify-center gap-3'>
  Login with Google <FaGoogle />
 </div></button>
         
             <p>Don't Have an account? Please <Link to='/register' className='text-blue-600'>Register</Link></p>
        </form>
       </div>
       </div>
    );
};

export default Login;