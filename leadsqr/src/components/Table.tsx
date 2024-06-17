
import threedots from "../assets/threedots.png";
import filter from "../assets/filter.png";
import "../styles/Table.scss";
interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phone_number: string;
    date_joined: string;
    user_status: string;
}

interface TableProps {
    user: User[];
}


const Table = ({user}:TableProps) => {


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className="organization">
                            <span>ORGANIZATION</span>{" "}
                            <div className="organization-icon-div">
                                <img src={filter} width={14} height={14} alt="Filter" />
                            </div>
                        </th>

                        <th className="username">
                            <span>USERNAME</span>{" "}
                            <img src={filter} width={14} height={14} alt="Filter" />
                        </th>

                        <th className="email">
                            <span>EMAIL</span>{" "}
                            <img src={filter} width={14} height={14} alt="Filter" />
                        </th>
                        <th className="phone-number">
                            <span>PHONE NUMBER</span>
                            <img src={filter} width={14} height={14} alt="Filter" />
                        </th>
                        <th className="date-joined">
                            <span>DATE JOINED</span>
                            <img src={filter} width={14} height={14} alt="Filter" />
                        </th>
                        <th className="status">
                            <span>STATUS</span>{" "}
                            <img src={filter} width={14} height={14} alt="Filter" />
                        </th>
                        <th className="actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.organization}</td>

                            <td>{item.username}</td>

                            <td>{item.email}</td>
                            <td className="phone-number">{item.phone_number}</td>
                            <td className="date-joined">
                                {new Date(item.date_joined).toLocaleDateString()}
                            </td>
                            <td className="status">{item.user_status}</td>
                            <td className="actions">
                                <img src={threedots} alt="Actions" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" onClick={prevPage} className="page-link">prev</a>
                    </li>
                    {
                        numbers.map((number,index)=>(
                            <li key={index} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                <a  href="#" className="page-item" 
                                onClick={() => changePage(number)}>{number}</a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="#" onClick={nextPage} className="page-link">Next</a>
                    </li>
                </ul>
            </nav> */}
        </>
    );

};

export default Table;
