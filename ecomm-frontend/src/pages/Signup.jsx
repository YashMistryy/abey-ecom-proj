import React, { useState } from 'react'
import loginSignUpGif from '../assets/login-animation.gif'
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { FlashAuto, Password } from '@mui/icons-material';
import { Link } from "react-router-dom";



const Signup = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    console.log(formData);
    const handlePasswordClick = ()=>{
        setShowPassword(prev => !prev)
    }
    const handleInputChange = (e)=>{
        const {name,value} = e.target
        // console.log(name,value);
        setFormData((prev)=>{
            return({
                ...prev,
                [name]:value
            })
        })
    }
    const handleSignnupSubmit= (e)=>{
        e.preventDefault()
        const {firstName,lastName,email,password} = formData
        if(firstName && lastName && email && password){
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if(passwordPattern.test(password)){
                alert("Signup successfully!")
            }else{
                alert("Password dont match with required parameters!!!")
            }
        }else{
            alert("Enter all required fields !!!")
        }
    }
    return (
     <div className='p-2 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex  items-center flex-col p-4'>
            <div className=' w-19'>
                <img src={loginSignUpGif} className='w-full overflow-hidden drop-shadow-md rounded-full' alt='..' />
            </div>

            <form className='mt-3 w-full flex flex-col' onSubmit    ={handleSignnupSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' onChange={handleInputChange} name='firstName' id='firstName' className='w-full mt-2 mb-1 bg-slate-200 rounded-sm p-2 text-base'/>

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' onChange={handleInputChange} name='lastName' id='lastName' className='w-full mt-2 mb-1 bg-slate-200 rounded-sm p-2 text-base'/>

                <label htmlFor='lastName'>Email</label>
                <input type='email' onChange={handleInputChange} name='email' id='email' className='w-full mt-2 mb-1 bg-slate-200 rounded-sm p-2 text-base'/>

                <label htmlFor='lastName'>Password</label>
                <div className='w-full mt-2 bg-slate-200 rounded-sm p-2 text-base flex'>
                <input type={showPassword?'text':'password'} onChange={handleInputChange} name='password' id='password' className='bg-slate-200 mb-1 w-full h-full outline-none'/>
                <span className='text-xl flex cursor-pointer' onClick={handlePasswordClick}>{ showPassword ? <IoIosEyeOff/>:<FaEye/>}</span>
                </div>
                 
                <button type='submit' className=' max-w-[140px] text-xl bg-blue-600 p-2 items-center  my-4 mx-3 text-white' >SignUp</button>
            </form>
            <p><Link to={"/login"} >Already have an account? Login</Link></p>

        </div>
    </div>
  )
}

export default Signup