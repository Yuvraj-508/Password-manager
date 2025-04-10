import React,{useState} from 'react'
import { Link } from 'react-router';
import './Form.css'
import goggle from "../assets/google.png"
import facebook from "../assets/facebook.png"

function Form() {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className=''>
        <div className={`container ${isActive ? 'active' : ''}`}>
      {/* <!-- login form --> */}
      <div class="form-box login">
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" 
                required/>
            </div>
            <div class="input-box">
                <input type="password" placeholder="password" 
                required/>
            </div>
            <div class="forgot-link">
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" class="btn">login</button>
            <p>or login with social platforms</p>
            <div class="social-icons flex justify-center items-center gap-8">
             <Link className=' shadow border border-gray-200 px-10 py-2'><img src={goggle} alt="" className='w-10' /></Link>
             <Link className=' shadow border border-gray-200 px-10 py-2'><img src={facebook} alt="" className='w-10' /></Link>
            </div>
        </form>
      </div>
{/* <!--Registration--> */}
      <div class="form-box register">
        <form action="">
            <h1>Registration</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" 
                required/>
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Email" 
                required/>
                <i class='bx bxs-envelope'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="password" 
                required/>
                <i class='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" class="btn">Register</button>
            <p>or Register with social platforms</p>
            <div class="social-icons flex justify-center items-center gap-10">
            <Link className=' shadow border border-gray-200 px-10 py-2'><img src={goggle} alt="" className='w-10' /></Link>
            <Link className=' shadow border border-gray-200 px-10 py-2'><img src={facebook} alt="" className='w-10' /></Link>
            </div>
        </form>
      </div>

      
    {/* <!--toggle--> */}
    <div class="toggle-box">
       <div class="toggle-panel toggle-left">
        <h1>Hello, Welcome!</h1>
        <p>Don't have an account?</p>
        <button class="btn register-btn" onClick={() => setIsActive(true)}>Register</button>
       </div>
       <div class="toggle-panel toggle-right">
        <h1>Welcome Back!</h1>
        <p>Already have an account?</p>
        <button class="btn login-btn text-2xl" onClick={() => setIsActive(false)}>Login</button>
       </div>
    </div>
    </div>
    </div>
  )
}

export default Form
