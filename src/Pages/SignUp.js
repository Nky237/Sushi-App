import React from 'react'

const SignUp = () => {
  return (
    <div>
       <form>
          <div>
            <label>Name</label>
            <input type='text' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' />
          </div>
          <div>
            <label>Age</label>
            <input type='number' />
          </div>
          <div>
            <label>Gender</label>
            <input type='radio' />Male
            <input type='radio' />Female
          </div>
        </form> 
    </div>
  )
}

export default SignUp