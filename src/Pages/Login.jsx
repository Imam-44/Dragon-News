
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { login } = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogIn = (e) => {
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
  //  console.log({email, password});
   login(email, password)
   .then((res) => {
    const user = res.user;
    navigate(`${location.state? location.state : '/'}`)
   })
   .catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode);
   })
  }
  return (
     <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

        <h2 className='font-semibold text-2xl text-center'>Login your account</h2>  
      <form onSubmit={handleLogIn} className="card-body">
        <fieldset className="fieldset">
    {/* email  */}

          <label className="label">Email</label>
          <input type="email" 
          name='email'
          className="input" placeholder="Email" required/>
          
          {/* password  */}

          <label className="label">Password</label>
          <input type="password"
          name='password'
          className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>

          {
            error && <p className='text-secondary text-sm'>{error}</p>
          }

          <button type='submit' className="btn btn-neutral">Login</button>

          <p className='font-semibold text-center mt-5'>Don't Have An Account? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </fieldset>
      </form>
    </div>
     </div>
  );
};

export default Login;