import React, { useState } from 'react'
import './SignUp.css'
import chef1 from '../asset/chef1.jfif'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  // const [icon, setIcon] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className='d-flex'>
      <div className='form-img'>
          <img src={chef1} />
      </div>
      <div className='form-input'>
      <form>
          <h1 className='text-center '>Welcome Back To Sushi!</h1>
          <div>
            <input type='email' placeholder='Enter your Email'/>
          </div>
          <div >
            <input type={passwordShown?"text": "password"} placeholder='Enter your password' />
           <label className='mt-4' 
            style={{'marginLeft': '-37px', 'marginBottom':'30px', 'fontSize': '20px'}}
            onClick={togglePassword}>
              {passwordShown?<AiOutlineEyeInvisible />:<AiOutlineEye /> }
            </label>
          </div>
          <div>
            <button>LOG IN</button>
          </div>
      </form>
          </div> 
    </div>
  )
}

export default Login