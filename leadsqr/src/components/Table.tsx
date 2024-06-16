// import user from "../userData";
// // import user from "../data";
// import threedots from "../assets/threedots.png";
// import filter from "../assets/filter.png";
// import "../styles/Table.scss"

// const Table = () => {
//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID <img src={filter} alt="" /></th>
//                         <th>ORGANIZATION <img src={filter} alt="" /></th>
//                         <th>USERNAME <img src={filter} alt="" /></th>
//                         <th>EMAIL <img src={filter} alt="" /></th>
//                         <th>PHONE NUMBER <img src={filter} alt="" /></th>
//                         <th>DATE JOINED <img src={filter} alt="" /></th>
//                         <th>STATUS <img src={filter} alt="" /></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         user.map((item,index)=>(
//                             <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>{item.organization}</td>
//                                 <td>{item.username}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.phone_number}</td>
//                                 <td>{item.date_joined}</td>
//                                 <td>{item.user_status}</td>
//                                 <td><img src={threedots} alt="" /></td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Table


import user from '../userData';
import threedots from '../assets/threedots.png';
import filter from '../assets/filter.png';
import '../styles/Table.scss';

const Table = () => {
    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>ID <img src={filter} alt="Filter" /></th>
                <th>ORGANIZATION <img src={filter} alt="Filter" /></th>
                <th>USERNAME <img src={filter} alt="Filter" /></th>
                <th>EMAIL <img src={filter} alt="Filter" /></th>
                <th>PHONE NUMBER <img src={filter} alt="Filter" /></th>
                <th>DATE JOINED <img src={filter} alt="Filter" /></th>
                <th>STATUS <img src={filter} alt="Filter" /></th>
                <th>ACTIONS</th>
            </tr>
            </thead>
            <tbody>
            {user.map((item, index) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.organization}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone_number}</td>
                <td>{new Date(item.date_joined).toLocaleDateString()}</td>
                <td>{item.user_status}</td>
                <td><img src={threedots} alt="Actions" /></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Table;

