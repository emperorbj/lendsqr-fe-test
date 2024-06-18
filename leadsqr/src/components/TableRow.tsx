// import { useNavigate } from "react-router-dom"


// const TableRow = ({item, setDetailsOpen, detailsOpen, threedots, viewDetails,blackList,activateUser}:any) => {
    
    
//     const navigate = useNavigate()
//     const path = '/users/' + item.id

//     function onClick(){
//         navigate(path, {state:{item}})
//     }


//     return <tr key={item.id}>
//         <td>{item.organization}</td>

//         <td><span onClick={onClick}>{item.username}</span></td>

//         <td>{item.email}</td>
//         <td className="phone-number">{item.phone_number}</td>
//         <td className="date-joined">
//             {new Date(item.date_joined).toLocaleDateString()}
//         </td>
//         <td className="status">{item.user_status}</td>
//         <td className="actions">
//             <img src={threedots} onClick={() => setDetailsOpen(detailsOpen === item.id ? null : item.id)} alt="Actions" />
//             {
//                 detailsOpen === item.id && (
//                     <div className='details-container'>
//                         <div>
//                             <img src={viewDetails} alt="" />
//                             <p>View Details</p>
//                         </div>
//                         <div>
//                             <img src={blackList} alt="" />
//                             <p>Blacklist User</p>

//                         </div>
//                         <div>
//                             <img src={activateUser} alt="" />
//                             <p>Activate User</p>

//                         </div>
//                     </div>
//                 )
//             }
//         </td>
//     </tr>
// }

// export default TableRow
