import React, { useState } from 'react'
import './SignUp.css'
import Bg from '../asset/Bg.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className='d-flex'>
      <div className='form-img'>
          <img src={Bg} />
      </div>
      <div className='form-input'>
      <form>
          <h1 className='text-center '>Welcome to Sushi!</h1>
          <div>
            <input type='text' placeholder='Enter your fullname'/>
          </div>
          <div>
            <input type='email' placeholder='Enter your Email'/>
          </div>
          <div >
            <input type={passwordShown?"text": "password"} placeholder='Enter your password' />
            <AiOutlineEyeInvisible className='  mt-4' 
            style={{'marginLeft': '-37px', 'marginBottom':'30px', 'fontSize': '20px'}}
            onClick={togglePassword}
            />
          </div>
          <div>
            <button>SIGN UP</button>
          </div>
          <div className='text-center'>
            <p>Already have an account. <Link to='login'>LOGIN</Link></p>
          </div>
      </form>
          </div> 
    </div>
  )
}

export default SignUp