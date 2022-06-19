import React, { useState } from 'react'
import axios from 'axios'
import '../css/Login2.css'
import { useNavigate } from 'react-router-dom'

const Login2 = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [msq, setMsq] = useState('')
     const navigate = useNavigate()
     const navigate2 = useNavigate()

    

     const login = async (e) => {
      e.preventDefault()
      try {
          await axios.post('http://localhost:4000/login', {
              email: email,
              password: password,
          })
          navigate('/')  
      } catch (error) {
           if (error.response) {
          setMsq(error.response.data.msq)}
      }
  }
      


  return (
    <><link rel="stylesheet" href="Login2.css" />
     <loginbody>
      <form onSubmit={login}>
           <div className="welcome">
             <label>WELCOME</label>
            </div>
           <div className='login'>
              <input type="text" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
              <span>Username</span>
            </div>
          <div className='login'>
              <input type="password" required="required" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <span>Password</span>
            </div>
          <div className="loginButton">
            <button>
                <loginbutton>
                <span>Login</span><i></i>
                </loginbutton>
                </button>
            </div>
            <div className="loginButton">
              <button onClick={navigate2}>
                <registerbutton>
                <span>Register</span><i></i>
                </registerbutton>
                </button>
            </div>
            <p className='has-text-centered'>{msq}</p>
            </form>
            
      </loginbody></>
  )
}

export default Login2