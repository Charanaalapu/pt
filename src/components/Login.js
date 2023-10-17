import React from 'react'

const Login = () => {
  return (
    <>
    <div className='form'>
      <div className='loginbox'>
    <form action="#">
    <h3>Log In</h3>
            <div class="input-boxes">
                
              <div class="input-box">
                <label for="name">Username:<br/>
                <input type="text" class="signup_input-boxes" name='Username' placeholder="Enter username" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="password">Password:<br/>
                <input type="password" class="signup_input-boxes" name='password' placeholder="Enter password" required/>
                </label>
              </div>
              <div class="button input-box">
                <input type="submit" className="submit_btn" value="Log In"/>
              </div>
            </div>

      </form>
      </div>
      </div>
      </>
  )
}

export default Login
