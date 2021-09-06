import { useContext, useRef } from 'react'
import './login.scss'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function Login() {
    const email = useRef()
    const password = useRef()
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }

    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">BF Social</h3>
                    <span className="login-desc"> Connect with friends and the world around you on BF Social.</span>
                </div>
                <form className="login-right" onSubmit={handleSubmit}>
                    <div className="login-box">
                        <input type="email" placeholder='Email' className="login-input" required ref={email} />
                        <input type="password" placeholder='Password' className="login-input" required minLength='6' ref={password} />
                        <button className="login-button">{isFetching ? (
                            <CircularProgress color="white" size="20px" />
                        ) : (
                            "Log In"
                        )}</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <Link to='/register'>
                            <button className="login-register-button">Create a new account</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
