import React from 'react'
import {Link} from 'react-router-dom';

const Sign_up = () => {
  return (
    <>
    <div className='form'>
    <div className='left1'>
    <h2>Progress Tracker</h2>
    <img height="300px" src={require("../images/sign-up.png")} alt={"sign up"}/>
    </div>
    <div className='form_div'>
    <form method="post">
    <h3>Sign Up</h3>
            <div class="input-boxes">  
              <div class="input-box">
                <label for="name">Username:<br/>
                <input type="text" class="signup_input-boxes" name='Username' placeholder="Enter username" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="email">Email:<br/>
                <input type="text" class="signup_input-boxes" name='email' placeholder="Enter email" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="password">Password:<br/>
                <input type="password" class="signup_input-boxes" name='password' placeholder="Enter password" required/>
                </label>
              </div>
              <div class="button input-box">
                <input type="submit" className="submit_btn" value="Sign up"/>
              </div><br/>
              <h5>Already Have an Account! <Link to="/login" style={{textDecoration:'none'}}>LogIn Here</Link></h5>
            </div>
      </form>
      </div>
      </div>
      </>
  )
}

export default Sign_up
