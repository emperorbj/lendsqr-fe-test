import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import userAvatar from "../assets/useravatar.png";
import fullStar from "../assets/fullstar.png";
import emptyStar from "../assets/emptystar.png";
import backarrow from "../assets/backarrow.png";
import user from "../userData";
import "../styles/UserDetailsPage.scss";

const UsersDetailsPage = () => {
    const params = useParams();
    const userDetail = user.filter((item) => item.id.toString() === params.id)[0];
    console.log(userDetail);

    return (
        <div>
            <Navbar />
            <div className="side-details">
                <Sidebar />
                <div className="details">
                    <div className="header-user-details">
                        <div className="arrow-user">
                            <div className="back-to-users">
                                <Link to='/dashboard'>
                                    <img src={backarrow} alt="backarrow" />
                                    <p>Back to users</p>
                                </Link>
                            </div>
                            <h2>User Details</h2>
                        </div>
                        <div className="blacklist-activate">
                            <button className="blacklist-btn">Blacklist</button>
                            <button className="activate-btn">Activate</button>
                        </div>
                    </div>
                    <div className="user-profile-header">
                        <div className="top">
                            <div className="avatar-username-container">
                                <div className="avatar-username">
                                    <div>
                                        <img src={userAvatar} width={150} height={150} alt="" />
                                    </div>
                                    <div className="username-id">
                                        <h2>{userDetail.username}</h2>
                                        <p>{userDetail.special_id}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tier-rating">
                                <div className="tier-stars-div">
                                    <h2>User's Tier</h2>
                                    <div>
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="amount">
                                <div>
                                    <h2>N{userDetail.income}</h2>
                                    <p>{userDetail.account_number}/{userDetail.banks}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div>
                                <p className="general">General Details</p>
                            </div>
                            <div>
                                <p>Documents</p>
                            </div>
                            <div>
                                <p>Bank Details</p>
                            </div>
                            <div>
                                <p>Loans</p>
                            </div>
                            <div>
                                <p>Savings</p>
                            </div>
                            <div>
                                <p>App and Systems</p>
                            </div>
                        </div>
                    </div>
                    <div className="detailed-user-info">
{/* //////////////////////////////////////////////////////////////////////////////////////////// */}
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
                                        <p>{userDetail.firstName}{userDetail.mailExtension}</p>
                                    </div>
                                    <div>
                                        <h2>TYPE OF RESIDENCE</h2>
                                        <p>{userDetail.residence}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div className="BVN">
                                        <h2>BVN</h2>
                                        <p>{userDetail.bvn_number}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div className="gender">
                                        <h2>GENDER</h2>
                                        <p>{userDetail.gender}</p>
                                    </div>
                                </div>
                            </div>
{/* //////////////////////////////////////////////////////////////////// */}
                        </div>
                        <div className="second-detail-section">
                            <h1>Education and Employment</h1>
                            <div className="personal-info-div">
                                <div className="box-1">
                                    <div>
                                        <h2>LEVEL OF EDUCATION</h2>
                                        <p>{userDetail.education}</p>
                                    </div>
                                    <div>
                                        <h2>OFFICE EMAIL</h2>
                                        <p>{userDetail.username}@{userDetail.organization}.com</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div>
                                        <h2>EMPLOYMENT STATUS</h2>
                                        <p>{userDetail.employment}</p>
                                    </div>
                                    <div>
                                        <h2>MONTHLY INCOME</h2>
                                        <p>{userDetail.income}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div>
                                        <h2>SECTOR OF EMPLOYMENT</h2>
                                        <p>{userDetail.sector}</p>
                                    </div>
                                    <div>
                                        <h2>LOAN REPAYMENT</h2>
                                        <p>N{userDetail.loan}</p>
                                    </div>
                                </div>
                                <div className="last-box">
                                    <div>
                                        <h2>DURATION OF EMPLOYMENT</h2>
                                        <p>{userDetail.duration} years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className="third-detail-section">
                            <h1>Socials</h1>
                            <div className="personal-info-div">
                                <div className="box-1">
                                    <div>
                                        <h2>TWITTER</h2>
                                        <p>@{userDetail.username}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div>
                                        <h2>FACEBOOK</h2>
                                        <p>{userDetail.username}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div>
                                        <h2>INSTAGRAM</h2>
                                        <p>@{userDetail.username}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fourth-detail-section">
                            <h1>Guarantors</h1>
                            <div className="personal-info-div">
                                <div className="box-1">
                                    <div>
                                        <h2>FULL NAME</h2>
                                        <p>{userDetail.guarantor_name}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div>
                                        <h2>PHONE NUMBER</h2>
                                        <p>{userDetail.guarantor_number}</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div>
                                        <h2>EMAIL ADDRESS</h2>
                                        <p>{userDetail.guarantor_name}@gmail.com</p>
                                    </div>
                                </div>
                                <div className="box-1">
                                    <div>
                                        <h2>RELATIONSHIP</h2>
                                        <p>{userDetail.relationship}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersDetailsPage;
