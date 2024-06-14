import Logo from '../assets/Union.png';
import LogoName from '../assets/lendsqr.png';
import SearchIcon from '../assets/Vector.png'
import Avatar from '../assets/avatar.png';
import Bell from '../assets/np_notification_2425223_000000 1.png';
import DropdownIcon1 from '../assets/np_dropdown_615120_000000 1.png';
import '../styles/Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className='logo-container'>
                <div>
                    <img src={Logo} alt="" />
                    <img src={LogoName} alt="" />
                </div>
            </div>

            <div className='search-container'>
                <div className='input-div'>
                    <input type="text"/>
                </div>
                <div className='search-icon-div'>
                    <img src={SearchIcon} alt="" />
                </div>
            </div>

            <div className='right-container'>
                <h1>Docs</h1>
                <img src={Bell} alt="" />
                <img src={Avatar} alt="" />
                <div>
                    <h2>Adedeji</h2>
                    <img src={DropdownIcon1} alt="" />
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar
