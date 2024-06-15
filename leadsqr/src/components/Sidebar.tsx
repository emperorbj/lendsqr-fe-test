import '../styles/Sidebar.scss'
import dropDown from '../assets/orgdrop.png'
import Organization from '../assets/organization.png'
import HomeIcon from '../assets/home 1.png'

interface sideData {
    Image: string,
    Description: string,
}


const customerMenu: sideData[] = [
    {
        Image: '/sideuser.png',
        Description: 'Users'
    },
    {
        Image: '/guarantors.png',
        Description: 'Guarantors'
    },
    {
        Image: '/loans.png',
        Description: 'Loans'
    },
    {
        Image: '/decision.png',
        Description: 'Decision Model'
    },
    {
        Image: '/save.png',
        Description: 'Savings'
    },
    {
        Image: '/request.png',
        Description: 'Load Request'
    },
    {
        Image: '/whitelist.png',
        Description: 'Whitelist'
    },
    {
        Image: '/user-times 1.png',
        Description: 'Karma'
    }
]

const businessMenu: sideData[] = [
    {
        Image: '/users.png',
        Description: 'Users'
    },
    {
        Image: '/guarantors.png',
        Description: 'Guarantors'
    },
    {
        Image: '/loans.png',
        Description: 'Loans'
    },
    {
        Image: '/decision.png',
        Description: 'Decision Model'
    },
    {
        Image: '/save',
        Description: 'Savings'
    },
    {
        Image: '/request.png',
        Description: 'Load Request'
    },
    {
        Image: '/whitelist.png',
        Description: 'Whitelist'
    },
    {
        Image: '/user-times 1.png',
        Description: 'Karma'
    }
]

const Sidebar = () => {
    return (
        <section className='sidebar-container'>
            <div className='switch'>
                <img src={Organization} width={18} height={18} alt="" />
                <h1>Switch Organization</h1>
                <img src={dropDown} width={18} height={18} alt="" />
            </div>
            <div className='home-dashboard'>
                <img src={HomeIcon} width={20} height={20} alt="" />
                <h2>Dashboard</h2>
            </div>
            <h2>Customers</h2>
        
            {
                customerMenu.map((item,index) => (
                    <div className='menu-container' key={index}>
                        <img src={item.Image} width={18} height={18} alt="" />
                        <p>{item.Description}</p>
                    </div>
                ))
            }
        
        </section>
    )
}

export default Sidebar
