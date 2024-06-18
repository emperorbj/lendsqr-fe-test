
import threedots from "../assets/threedots.png";
import filter from "../assets/filter.png";
import "../styles/Table.scss";
import { useState } from "react";
import '../styles/OrganizationMenu.scss'
import calendar from '../assets/calendar.png'
import dropdown from '../assets/orgdrop.png'
import viewDetails from '../assets/viewDetails.png'
import blackList from '../assets/blackListUser.png'
import activateUser from '../assets/activateUser.png'
import '../styles/UserDetailsMenu.scss'
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


const Table = ({ user }: TableProps) => {

    const [open, setOpen] = useState(false)
    const [detailsOpen, setDetailsOpen] = useState<number | null>(null);


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className="organization" >
                            <span onClick={() => setOpen(false)}>ORGANIZATION</span>{" "}
                            <div className="organization-icon-div">
                                <img src={filter} width={14} height={14} onClick={() => setOpen(true)} alt="Filter" />
                                {
                                    open && (
                                        <div className='form-container' onClick={() => setOpen(false)}>
                                            <form action="" className='form'>
                                                <div className='label-input'>
                                                    <label className='label' htmlFor="organization">
                                                        Organization
                                                    </label>
                                                    <div className='input-div'>
                                                        <input type="text" placeholder='select' />
                                                        <img src={dropdown} alt="" />
                                                    </div>
                                                </div>
                                                <div className='label-input'>
                                                    <label className='label' htmlFor="User">
                                                        Username
                                                    </label>
                                                    <div className='input-div'>
                                                        <input type="text" placeholder='User' />
                                                    </div>
                                                </div>
                                                <div className='label-input'>
                                                    <label className='label' htmlFor="Email">
                                                        Email
                                                    </label>
                                                    <div className='input-div'>
                                                        <input type="text" placeholder='Email' />
                                                    </div>
                                                </div>
                                                <div className='label-input'>
                                                    <label className='label' htmlFor="date">
                                                        Date
                                                    </label>
                                                    <div className='input-div'>
                                                        <input type="text" placeholder='Date' />
                                                        <img src={calendar} alt="" />
                                                    </div>
                                                </div>
                                                <div className='label-input'>
                                                    <label className='label' htmlFor="phone number">
                                                        Phone Number
                                                    </label>
                                                    <div className='input-div'>
                                                        <input type="text" placeholder='phone number' />
                                                    </div>
                                                </div>
                                                <div className='label-input'>
                                                    <label className='label' htmlFor="status">
                                                        Status
                                                    </label>
                                                    <div className='input-div'>
                                                        <input type="text" placeholder='select' />
                                                        <img src={dropdown} alt="" />
                                                    </div>
                                                </div>
                                                <div className="reset-filter-button">
                                                    <button>Reset</button>
                                                    <button className="filter-button">Filter</button>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                }
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
                    {user.map((item) => (
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
                                <img src={threedots}  onClick ={() => setDetailsOpen(detailsOpen === item.id ? null : item.id)} alt="Actions" />
                                {
                                    detailsOpen === item.id && (
                                        <div className='details-container'>
                                        <div>
                                            <img src={viewDetails} alt="" />
                                            <p>View Details</p>
                                        </div>
                                        <div>
                                            <img src={blackList} alt="" />
                                            <p>Blacklist User</p>
                            
                                        </div>
                                        <div>
                                            <img src={activateUser} alt="" />
                                            <p>Activate User</p>
                            
                                        </div>
                                    </div>
                                    )
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </>
    );

};

export default Table;
