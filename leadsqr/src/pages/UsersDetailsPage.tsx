import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

import user from "../userData";
import '../styles/UserDetailsPage.scss'

const UsersDetailsPage = () => {

    const params = useParams()
    const userDetail = user.filter((item) => item.id.toString() === params.id)[0]
    console.log(userDetail);
    // const location = useLocation()
    // const userDetail = location.state.item
    console.log(userDetail);

    return (
        <div>
            <Navbar />
            <div className="side-details">
                <Sidebar />
                <div className="details">
                    <div className="header-user-details">

                    </div>
                    <div className="user-profile-header">

                    </div>
                    <div className="detailed-user-info">
                        <div className="first-detail-section">
                            <h1>Personal Information</h1>
                            <div className="personal-info-div">
                                <div className="box-1">
                                    <div className="full-name">
                                        <h2>FULL NAME</h2>
                                        <p>{userDetail.username}</p>
                                    </div>
                                    <div>
                                        <h2>MARITAL STATUS</h2>
                                        <p>{userDetail.marital}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div className="phone">
                                        <h2>PHONE NUMBER</h2>
                                        <p>{userDetail.phone_number}</p>
                                    </div>
                                    <div>
                                        <h2>CHILDREN</h2>
                                        <p>{userDetail.children}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div className="email">
                                        <h2>EMAIL</h2>
                                        <p>{userDetail.email}</p>
                                    </div>
                                    <div>
                                        <h2>TYPE OF RESIDENCE</h2>
                                        <p>{userDetail.residence}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div className="email">
                                        <h2>EMAIL</h2>
                                        <p>{userDetail.email}</p>
                                    </div>
                                    <div>
                                        <h2>TYPE OF RESIDENCE</h2>
                                        <p>{userDetail.residence}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="second-detail-section">
                        </div>
                        <div className="third-detail-section">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersDetailsPage
