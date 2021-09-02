import './login.scss'

export default function Login() {
    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">BF Social</h3>
                    <span className="login-desc"> Connect with friends and the world around you on BF Social.</span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input type="email" placeholder='Email' className="login-input" required />
                        <input type="password" placeholder='Password' className="login-input" required />
                        <button className="login-button">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-button">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
