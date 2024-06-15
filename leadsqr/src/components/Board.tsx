import '../styles/Board.scss';

interface BoxData {
    Image: string,
    Title: string,
    Amount:string
}

const boxData: BoxData[] = [
    {
        Image:'/users.png',
        Title:'USERS',
        Amount:'2,453'

    },
    {
        Image:'/active.png',
        Title:'ACTIVE USERS',
        Amount:'2,453'

    },
    {
        Image:'/loan.png',
        Title:'USERS WITH LOANS',
        Amount:'12,453'

    },
    {
        Image:'/savings.png',
        Title:'USERS WITH SAVINGS',
        Amount:'102,453'

    }
]


const Board = () => {
    return (
        <div className='table-container'>
            <div className='head'>

            </div>

            <div className='top-boxes'>
                {
                    
                }
            </div>

            <div className='table-div'>

            </div>
        </div>
    )
}

export default Board
