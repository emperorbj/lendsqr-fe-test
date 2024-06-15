
// src/data/menuData.ts

export interface SideData {
    Image: string,
    Description: string,
}

export const settingsMenu: SideData[] = [
    {
    
        Image: '/preference.png',
        Description: 'Preferences'
    },
    {
    
        Image: '/feesPricing.png',
        Description: 'Fees and Pricing'
    },
    {
    
        Image: '/auditLog.png',
        Description: 'Audit Logs'
    }
]

export const customerMenu: SideData[] = [
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

export const businessMenu: SideData[] = [
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
