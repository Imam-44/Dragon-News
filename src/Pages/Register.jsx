import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const [nameError, setNameError] = useState('');
  const { createUser, setUser, updateUser } = use(AuthContext);
  
  const navigate = useNavigate();
  const handleRegister = (e) => {

   e.preventDefault();
   const name = e.target.name.value;
   if(name.length < 5) {
    setNameError('Name should be more then 5 character')
    return;
   }else{
    setNameError('');
   }
   const photoUrl = e.target.photoUrl.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
  //  console.log({name,photoUrl,email,password});
   createUser(email, password)
   .then(res =>{
    const user = res.user;
    updateUser({displayName: name, photoUrl: photoUrl}).then(()=>{
      setUser({...user, displayName: name, photoUrl: photoUrl});
      navigate('/')
    })
   .catch((error) => {
    // console.log(error);
    setUser(user)
   })
    // console.log(user);
   })
   .catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
   })
  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

    <h2 className='font-semibold text-2xl text-center'>Register  your account</h2>  
  <form onSubmit={handleRegister} className="card-body">
    <fieldset className="fieldset">
      {/* name  */}
    <label className="label">Name</label>
    <input name='name' type="text" className="input" placeholder="Enter your name" 
    required
    />
    {
      nameError && <p className='text-xs text-error'>{nameError}</p>
    }

    {/* photoUrl  */}
    <label className="label">Photo URL</label>
    <input name='photoUrl' type="text" className="input" placeholder="Photo URL" required />

      {/* Email  */}
      <label className="label">Email</label>
      <input name='email' type="email" className="input" placeholder="Email" required />

      {/* password  */}
      <label 
      className="label">Password</label>
      <input name='password' type="password" className="input" placeholder="Password" required/>
      <div><a className="link link-hover">Forgot password?</a></div>
      <button type='submit' className="btn btn-neutral  ">Register</button>

      <p className='font-semibold text-center mt-5'>Already Have An Account? <Link  className='text-secondary' to='/auth/login'>Login</Link></p>
    </fieldset>
  </form>
</div>
 </div>
  );
};

export default Register;