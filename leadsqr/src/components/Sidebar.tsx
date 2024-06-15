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
        Image: '/organization.png',
        Description: 'Organization'
    },
    {
        Image: '/loans.png',
        Description: 'Loan Products'
    },
    {
        Image: '/savingsProduct.png',
        Description: 'Saving Products'
    },
    {
        Image: '/feesCharges.png',
        Description: 'Fees and Charges'
    },
    {
        Image: '/transactions.png',
        Description: 'Transactions'
    },
    {
        Image: '/services.png',
        Description: 'Services'
    },
    {
        Image: '/serviceAccount.png',
        Description: 'Service Account'
    },
    {
        Image: '/settlements.png',
        Description: 'Settlements'
    },
    {
        Image: '/reports.png',
        Description: 'Reports'
    }
]

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
