import '../styles/Board.scss';
import Table from './Table';
import user from "../userData";
import { useState } from 'react';
import '../styles/Pagination.scss';
interface BoxData {
    Image: string,
    Title: string,
    Amount: string
}

const boxData: BoxData[] = [
    {
        Image: '/users.png',
        Title: 'USERS',
        Amount: '2,453'

    },
    {
        Image: '/active.png',
        Title: 'ACTIVE USERS',
        Amount: '2,453'

    },
    {
        Image: '/loan.png',
        Title: 'USERS WITH LOANS',
        Amount: '12,453'

    },
    {
        Image: '/savings.png',
        Title: 'USERS WITH SAVINGS',
        Amount: '102,453'

    }
]


const Board = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 20;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const currentRecords = user.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(user.length / recordsPerPage);
    const numbers = [...Array(numberOfPages + 1).keys()].slice(1);
    return (
        <div className='table-container'>
            <div className='head'>
                <h1>Users</h1>
            </div>

            <div className='top-boxes'>
                {
                    boxData.map((item) => (
                        <div key={item.Title} className='box'>
                            <div>
                                <img src={item.Image} alt="" />
                            </div>
                            <h2>{item.Title}</h2>
                            <h1>{item.Amount}</h1>
                        </div>
                    ))
                }
            </div>
            <div className='table-div'>
                <Table user={currentRecords} />
            </div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" onClick={prevPage} className="page-link">prev</a>
                    </li>
                    {
                        numbers.map((number, i) => (
                            <li key={i} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                <a href="#" className="page-link"
                                    onClick={() => changePage(number)}>{number}</a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="#" onClick={nextPage} 
                        className="page-link">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
    function prevPage() {

    }

    function changePage(id) {

    }

    function nextPage() {

    }
}

export default Board