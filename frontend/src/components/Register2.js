import React,{ useState } from 'react'
import '../css/Login2.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register2 = () => {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confPassword, setConfpassword] = useState('')
     const [msq, setMsq] = useState('')
     const navigate = useNavigate()

     const Register2 = async (e) => {
          e.preventDefault()
          try {
              await axios.post('http://localhost:4000/users', {
                  name: name,
                  email: email,
                  password: password,
                  confPassword: confPassword
              })
              navigate('/login')
          } catch (error) {
               if (error.response) {
              setMsq(error.response.data.msg)}
          }
      }
     


     return (
          <><link rel="stylesheet" href="Login2.css" />
          <loginbody>
               <form onSubmit={ Register2 }>
               <div className="welcome">
             <label>REGISTER</label>
            </div>
                    <div className='login'>
                         <input type="text" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                         <span>Name</span>
                    </div>
                    <div className='login'>
                         <input type="text" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                         <span>Email</span>
                    </div>
                    <div className='login'>
                         <input type="password" required="required" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                         <span>Password</span>
                    </div>
                    <div className='login'>
                         <input type="password" required="required" id='password' value={confPassword} onChange={(e) => setConfpassword(e.target.value)} />
                         <span>Confirm Password</span>
                    </div>
                    <div className="loginButton">
                         <button>
                         <registerbutton>
                              <span>Register</span><i></i>
                         </registerbutton>
                         </button>
                    </div>
                    <p className='has-text-centered'>{msq}</p>
               </form>
               </loginbody>
               </>
     )
}

export default Register2