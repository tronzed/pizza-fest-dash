import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'

function ReviewList() {
    return (
        <>
            <div className='wrapper'>
                <SideBar />
                <div class="main-panel">
                    <Header />

                    <div className="container">
                        <div className="page-inner">
                            <div className="page-header">
                                <h4 className="page-title">Dashboard</h4>
                                <ul className="breadcrumbs">
                                    <li className="nav-home">
                                        <a href="#">
                                            <i className="icon-home" />
                                        </a>
                                    </li>
                                    <li className="separator">
                                        <i className="icon-arrow-right" />
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">ReviewList</a>
                                    </li>
                                    <li className="separator">
                                        <i className="icon-arrow-right" />
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Starter Page</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="page-category">Inner page content goes here</div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default ReviewList;