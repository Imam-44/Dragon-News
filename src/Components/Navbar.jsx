import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // console.log("User trying to logout");
    logOut()
    .then(() => {
   alert('you logged Out successfully')
    }) 
    .catch((error) => {
     console.log(error);
    });
  }
  return (
     <div className='flex justify-between items-center'>
       <div className={` ${user && "border p-2"} bg-base-300 text-secondary font-bold`}>{user && user.email}</div>
       <div className="nav flex gap-5 text-accent">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
       </div>
       <div className="login-btn flex gap-5">
        <img className='w-12 rounded-full' src={`${user ? user.photoUrl: userIcon }`} alt="" />
        {
          user ? <button onClick={handleLogOut}  className='btn btn-primary px-10'> LogOut</button> :   <Link to='/auth/login' className='btn btn-primary px-10'> Login</Link>
        }
      
       </div>
     </div>
  );
};

export default Navbar;