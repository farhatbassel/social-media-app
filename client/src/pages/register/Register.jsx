import './register.scss'

export default function Register() {
    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">BF Social</h3>
                    <span className="login-desc"> Connect with friends and the world around you on BF Social.</span>
                </div>
                <div className="login-right">
                    <div className="register-box">
                        <input type="text" placeholder='Username' className="login-input" required />
                        <input type="email" placeholder='Email' className="login-input" required />
                        <input type="password" placeholder='Password' className="login-input" required />
                        <input type="password" placeholder='Password Again' className="login-input" required />
                        <button className="login-button">Sign Up</button>
                        <button className="login-register-button">Log into your account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
