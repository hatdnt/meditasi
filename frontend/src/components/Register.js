import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfpassword] = useState('')
    const [msq, setMsq] = useState('')
    const navigate = useNavigate()

    const Register = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            })
            navigate.push('/')
        } catch (error) {
            console.log(error.response.data)
        }
    }

  return (
                <form onSubmit={ Register } className="box">
                    <div className="field mt-5">
                        <label className="label">name</label>
                    <div className="control">
                            <input type="text" className="input" placeholder='Name'
                            value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        </div>
                    
                    <div className="field mt-5">
                        <label className="label">Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='Email'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='********'
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Confirm password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='********'
                            value={confPassword} onChange={(e) => setConfpassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-success is-fullwidth">Register</button>
                    </div>
                </form>
            
  )
}

export default Register