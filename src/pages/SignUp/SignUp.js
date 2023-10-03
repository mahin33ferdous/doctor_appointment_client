import React, { useContext, useState } from 'react';
import b from '../../img/banner.jpg'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {createUser,updateUser}=useContext(AuthContext)
    const [signUpError,setSignUpError]=useState()
    const navigate=useNavigate()
    const [userSignUpEmail,setuserSignUpEmail]=useState('')
    const [token]=useToken(userSignUpEmail)

    if(token){
      navigate('/')
    }
    const handleSignUp=data=>{
       console.log(data)
       setSignUpError('')
       createUser(data.email,data.password)
       .then(res=>{
        const user=res.user;
        console.log(user);
        toast('User created succesfully.')
        const userInfo={
         displayName: data.name
        }
      updateUser(userInfo)
      .then(()=>{
        saveUser(data.name,data.email)
       // navigate('/')
       
      })
      .catch(err=>console.log(err))
       })
       .catch(error=>{console.log(error.message)
                     setSignUpError(error.message)})
    }
    const saveUser=(name,email)=>{
      const user={
        name,email
      }
      console.log(user)

      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
        if(data.acknowledged){
           setuserSignUpEmail(email)
          //getUserToken(email) // mistakenly called this function to sign in this need to called here to save in user collection database
            toast.success('user inserted')
            //refetch()
        }
        else{
          toast.error(data.message)
        }
})
    }
// geting user token from jwt api 
    // const getUserToken=email=>{
    //   console.log(email)
    //   fetch(`http://localhost:5000/jwt?email=${email}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data)
    //     if(data.accessToken)
    //     {
    //       localStorage.setItem('accessToken',data.accessToken)
    //       navigate('/')
    //     }
    //   })
    // }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
        <div className='w-96 p-7' >
        <h4 className='text-43l text-center '>Register</h4>
        <form onSubmit={handleSubmit(handleSignUp)}>
  
      <div className="form-control w-full max-w-xs">
      <label className="label">
         <span className="label-text">Name</span>
              </label>
           <input type="text" {...register("name",{ required: "Name is required" })}   className="input input-bordered w-full max-w-xs" />
           {errors.name && <p className='text-red-600' role="alert ">{errors.name?.message}</p>}
      
           <label className="label">
         <span className="label-text">Email</span>
              </label>
           <input type="email" {...register("email",{ required: "Email Address is required" })}   className="input input-bordered w-full max-w-xs" />
           {errors.email && <p className='text-red-600' role="alert ">{errors.email?.message}</p>}
           <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" {...register("password",{ required: "password is required",
       minLength:{value:8, message:"password should have more than 8 characters"},
       maxLength:{value:20, message:"password should not have more than 20 characters"}})}  aria-invalid={errors.password ? "true" : "false"}  className="input input-bordered w-full max-w-xs" />
       {errors.password && <p className='text-red-600' role="alert">{errors.password.message}</p>}
           <label className="label">
           {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </label>
        </div>

  
  
  
  <input type="submit" value="Register"className='btn btn-primary w-full' />
</form>
<p>Already have an account ?<Link className='text-primary' to="/login"> Log In?</Link></p>
<div className="divider">OR</div>
<button className='btn btn-outline w-full'>Log in with Google</button>
        </div>
        
    </div>
    );
};

export default SignUp;