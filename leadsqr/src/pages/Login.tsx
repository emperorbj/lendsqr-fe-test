import '../styles/Login.scss';
import Logo from '../assets/loginlogo.png';
import Pix from '../assets/loginpix.png';

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

            </div>
        </div>
    )
}

export default Login
