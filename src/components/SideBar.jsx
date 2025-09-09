import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { MyContext } from "../App";

function SideBar() {

    const { toggleSideNav } = useContext(MyContext);

    return (
        <>

            <div>
                <div className="sidebar" data-background-color="dark">
                    <div className="sidebar-logo">
                        {/* Logo Header */}
                        <div className="logo-header" data-background-color="dark">
                            {/* <Link to="/" className="logo">
                                Pizza-Fest
                            </Link> */}
                            <Link to="/" className="logo">
                                <img className="img-fluid" src="/assets/img/logo_01.png" />
                            </Link>
                            <div className="nav-toggle">
                                <button onClick={toggleSideNav} className="btn btn-toggle xxx">
                                    <i class="fas fa-bars"></i>
                                </button>
                            </div>
                            <button className="topbar-toggler more">
                                <i className="gg-more-vertical-alt" />
                            </button>
                        </div>
                        {/* End Logo Header */}
                    </div>
                    <div className="sidebar-wrapper scrollbar scrollbar-inner">
                        <div className="sidebar-content">
                            <ul className="nav nav-secondary">
                                <li className="nav-item active hide_me">
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#dashboard"
                                        className="collapsed"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-home" />
                                        <p>Dashboard</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="dashboard">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <a href="../demo1/index.html">
                                                    <span className="sub-item">Dashboard 1</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active_link nav-link" : "nav-link"} to="/">
                                        <p>Orders</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active_link nav-link" : "nav-link"} to="/products-list" >
                                        <p>Products</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active_link nav-link" : "nav-link"} to="/approved-order">
                                        <p>Approve Order</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active_link nav-link" : "nav-link"} to="/cancel-order">
                                        <p>Canceled Order</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active_link nav-link" : "nav-link"} to="/best-seller">
                                        <p>Best Seller</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SideBar;