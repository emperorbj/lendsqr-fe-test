import '../styles/Sidebar.scss'
import dropDown from '../assets/orgdrop.png'
import Organization from '../assets/organization.png'
import HomeIcon from '../assets/home 1.png'
import { customerMenu, businessMenu, settingsMenu } from '../sideBarData/menuData'

const Sidebar = () => {
    return (
        
        <section className='sidebar-container'>
            <div className='switch'>
                <img src={Organization} width={18} height={18} alt="" />
                <h3>Switch Organization</h3>
                <img src={dropDown} width={18} height={18} alt="" />
            </div>
            <div className='sidebar-home-dashboard'>
                <img src={HomeIcon} width={20} height={20} alt="" />
                <p>Dashboard</p>
            </div>
            <p>Customers</p>
        
            {
                customerMenu.map((item) => (
                    <div  className={`menu-container ${item.Description === "Users" ? 'users-menu-item' : ''}`}>
                        <img src={item.Image} width={18} height={18} alt="" />
                        <p>{item.Description}</p>
                    </div>
                ))
            }
            <p>Business</p>
            {
                businessMenu.map((item) => (
                    <div className='menu-container' key={item.Description}>
                        <img src={item.Image} width={18} height={18} alt="" />
                        <p>{item.Description}</p>
                    </div>
                ))
            }
            <p className='settings'>Settings</p>
            {
                    settingsMenu.map((item) => (
                    <div className='menu-container' key={item.Description}>
                        <img src={item.Image} width={18} height={18} alt="" />
                        <p>{item.Description}</p>
                    </div>
                ))
            }
        
        </section>
        
    )
}

export default Sidebar
