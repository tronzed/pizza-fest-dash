import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function SideBar() {

    const [toggleClass,setToggleClass] = useState(false);

    function addSidebarClass(){
        setToggleClass(!toggleClass);
    }

    return (
        <>

            {console.log(toggleClass,'--------toggleClass---------')}

            <div className={`wrapper side_bar_wrapper ${ toggleClass === true ? "sidebar_minimize":"" }`}>
                <div className="sidebar" data-background-color="dark">
                    <div className="sidebar-logo">
                        {/* Logo Header */}
                        <div className="logo-header" data-background-color="dark">
                            <Link to="/" className="logo">
                                Pizza-Fest
                            </Link>
                            <div className="nav-toggle">
                                <button onClick={addSidebarClass} className="btn btn-toggle xxx">
                                    <i className="gg-menu-left" />
                                </button>
                                <button onClick={addSidebarClass} className="btn btn-toggle sidenav-toggler yyy">
                                    <i className="gg-menu-left" />
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
                                <li className="nav-item active">
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
                                    <NavLink className={(isActive) => isActive ? "active nav-link" : "nav-link"} to="/orders">
                                        <p>Orders</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="/products-list" >
                                        <p>Products</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/approved-order">
                                        <p>Approve Order</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cancel-order">
                                        <p>Canceled Order</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/best-seller">
                                        <p>Best Seller</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/site-detail">
                                        <p>Site Detail</p>
                                    </Link>
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