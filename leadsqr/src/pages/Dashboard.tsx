import Board from "../components/Board"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import '../styles/Dashboard.scss'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar/>
            <div className="sidebar-board-container">
                <Sidebar/>
                <Board/>
            </div>
            
        </div>
    )
}

export default Dashboard
