import '../styles/Sidebar.scss'
import dropDown from '../assets/orgdrop.png'
import Organization from '../assets/organization.png'
import HomeIcon from '../assets/home 1.png'
import { customerMenu, businessMenu } from '../sideBarData/menuData'

const Sidebar = () => {
    return (
        <div className='parent-container'>
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
                customerMenu.map((item,index) => (
                    <div className='menu-container' key={index}>
                        <img src={item.Image} width={18} height={18} alt="" />
                        <p>{item.Description}</p>
                    </div>
                ))
            }
            <p>Business</p>
            {
                businessMenu.map((item,index) => (
                    <div className='menu-container' key={index}>
                        <img src={item.Image} width={18} height={18} alt="" />
                        <p>{item.Description}</p>
                    </div>
                ))
            }
        
        </section>
        </div>
        
    )
}

export default Sidebar
