import '../styles/Login.scss';
import Logo from '../assets/loginlogo.png';
import Pix from '../assets/loginpix.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='login-container'>
            <div className='left-box'>
                <div className='images-container'>
                    <div className='logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='welcome-image'>
                        <img src={Pix} alt="" />
                    </div>
                </div>
            </div>
            <div className='login-box'>
                <h1>Welcome!</h1>
                <p>Enter details to login</p>
                <form className='form-container'>
                    <div>
                        <input type='text' name='email' placeholder='Email'/>
                    </div>
                    <div className='password'>
                        <input type='password' name='email' placeholder='password'/>
                        <p>show</p>
                    </div>
                    <p>FORGOT PASSWORD?</p>
                    <Link to='/dashboard'>
                    <button type='submit'>LOG{" "}IN</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
