import React from 'react';
import { use } from 'react';
import './Navbar.css'
import Swal from 'sweetalert2';

import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const {user,logOut} = use(AuthContext)
  const handleLogout =()=>{
    logOut()
    .then(()=>{
Swal.fire("Logout successfully")
    }).catch((error)=>{
      const code=error.code
      
 Swal.fire(code)
    })
  }
    return (

      
     <div className="sticky top-0 z-50 navbar bg-purple-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/alltoys'>All Toys</NavLink></li>
      <li><NavLink to='/profile'>My Profile</NavLink></li>
      <li><NavLink to='/support'>Support</NavLink></li>
      </ul>
    </div>
    <a className=" text-teal-600 font-bold text-2xl">ToyTopia</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/alltoys'>All Toys</NavLink></li>
      <li><NavLink to='/profile'>My Profile</NavLink></li>
      <li><NavLink to='/support'>Support</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
 user? (
   <div className='flex items-center justify-between gap-3'>
     <div className='img-div'>
       <img className='w-[60px] h-[60px] object-cover rounded-full' src={user.photoURL} />
       <span>{user.displayName}</span>
     </div>
     <button onClick={handleLogout} className='bg-purple-400 rounded-2xl py-2 px-3 font-bold text-white'>Logout</button>
    </div>
 ):( <NavLink className='mr-3 bg-purple-400 rounded-2xl py-2 px-3 font-bold text-white' to='/login'>Login</NavLink>)
}

  </div>
</div>


    );
};

export default Navbar;