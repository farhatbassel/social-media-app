import axios from 'axios'
import { useRef } from 'react'
import './register.scss'
import { useHistory } from 'react-router'

export default function Register() {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post('/auth/register', user)
                history.push('/login')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">BF Social</h3>
                    <span className="login-desc"> Connect with friends and the world around you on BF Social.</span>
                </div>
                <form className="login-right" onSubmit={handleSubmit}>
                    <div className="register-box">
                        <input type="text" placeholder='Username' ref={username} className="login-input" required />
                        <input type="email" placeholder='Email' ref={email} className="login-input" required />
                        <input type="password" placeholder='Password' ref={password} className="login-input" required minLength='6' />
                        <input type="password" placeholder='Password Again' ref={passwordAgain} className="login-input" required />
                        <button className="login-button" type='submit' >Sign Up</button>
                        <button className="login-register-button">Log into your account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
