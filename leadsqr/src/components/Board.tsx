import '../styles/Board.scss';
import Table from './Table';
import user from "../userData";
import { useState } from 'react';
import '../styles/Pagination.scss';
import { User } from '../type';
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
    const recordsPerPage = 15;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const currentRecords: User[] = user.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(user.length / recordsPerPage);
    // const numbers = [...Array(numberOfPages + 1).keys()].slice(1);




    // New helper function to create pagination range
    const getPaginationRange = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        range.push(1);
        for (let i = currentPage - delta; i <= currentPage + delta; i++) {
            if (i < numberOfPages && i > 1) {
                range.push(i);
            }
        }
        range.push(numberOfPages);

        for (const i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    }
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
                    {/* {
                        numbers.map((number, i) => (
                            <li key={i} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                <a href="#" className="page-link"
                                    onClick={() => changePage(number)}>{number}</a>
                            </li>
                        ))
                    } */}
                    {
                            getPaginationRange().map((number, i) => (
                                <li key={i} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                    {number === '...' ? (
                                        <span className="page-link">...</span>
                                    ) : (
                                        <a href="#" className="page-link"
                                            onClick={() => changePage(Number(number))}>{number}</a>
                                    )}
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
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id: number) {
        setCurrentPage(id)
    }

    function nextPage() {
        if(currentPage !== numberOfPages){
            setCurrentPage(currentPage + 1)
        }
    }
}

export default Board