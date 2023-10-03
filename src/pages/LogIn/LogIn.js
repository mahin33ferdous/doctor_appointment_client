import React, { useContext, useState } from 'react';
import b from '../../img/banner.jpg'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../Hooks/useToken';

const LogIn = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {signIn}=useContext(AuthContext)
    const [loginError,setLoginError]=useState()
    const location=useLocation()
    const navigate=useNavigate()
    const [userLoginEmail,setuserLoginEmail]=useState('')
    const [token]=useToken(userLoginEmail)



     const from=location.state?.form?.pathname || '/' //this is the location in which user wanted to go
   
     if(token){
      navigate(from,{replace:true})
    }

    const handleLogin=data=>{
       console.log(data)
       setLoginError('')
       signIn(data.email,data.password)
       .then(res=>{
        const user=res.user
        console.log(user)
        setuserLoginEmail(data.email)
        
       })
       .catch(error=>{
        console.log(error.message)
        setLoginError(error.message)
       })
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7' >
            <h4 className='text-43l text-center '>Login</h4>
            <form onSubmit={handleSubmit(handleLogin)}>
      
          <div className="form-control w-full max-w-xs">
          
               <label className="label">
             <span className="label-text">Email</span>
                  </label>
               <input type="email" {...register("email",{ required: "Email Address is required" })}   className="input input-bordered w-full max-w-xs" />
               {errors.email && <p className='text-red-600' role="alert ">{errors.email?.message}</p>}
               <label className="label">
             <span className="label-text">Password</span>
           </label>
           <input type="password" {...register("password",{ required: "password is required",minLength:{value:8, message:"password should have more then 8 characters"}})}  aria-invalid={errors.password ? "true" : "false"}  className="input input-bordered w-full max-w-xs" />
           {errors.password && <p className='text-red-600' role="alert">{errors.password.message}</p>}
           <div>
           {loginError && <p className='text-red-600'>{loginError}</p>}
           </div>
               <label className="label">
            <span className="label-text-alt">forgot password?</span>
            </label>
            </div>

      
      
      
      <input type="submit" value="Login"className='btn btn-primary w-full' />
    </form>
    <p>New user ?<Link className='text-primary' to="/signup"> Create an account?</Link></p>
    <div className="divider">OR</div>
    <button className='btn btn-outline w-full'>Log in with Google</button>
            </div>
            
        </div>
    );
};

export default LogIn;