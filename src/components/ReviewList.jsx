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


                            <div className='review_box_cover'>

                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div class="row row-card-no-pd">
                                            <div class="col-sm-6 col-md-3">
                                                <div class="card card-stats card-round">
                                                    <div class="card-body">
                                                        <h4 class="card-title">Tanuj Saini</h4>
                                                        <div className='review_box'>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star-half-alt'></i>
                                                            <i className='far fa-star'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-9">
                                                <div class="card card-stats card-round">
                                                    <div class="card-body">
                                                        <p class="card-category">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur dolor felis, vel consectetur risus cursus eget. Aenean sodales lorem quis nisl interdum sagittis. Aliquam lobortis, nunc non gravida euismod, neque neque accumsan urna, nec efficitur ante nisl vel nunc. Ut et laoreet orci. Vivamus vestibulum scelerisque quam vel ullamcorper.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div class="row row-card-no-pd">
                                            <div class="col-sm-6 col-md-3">
                                                <div class="card card-stats card-round">
                                                    <div class="card-body">
                                                        <h4 class="card-title">Tanuj Saini</h4>
                                                        <div className='review_box'>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star-half-alt'></i>
                                                            <i className='far fa-star'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-9">
                                                <div class="card card-stats card-round">
                                                    <div class="card-body">
                                                        <p class="card-category">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur dolor felis, vel consectetur risus cursus eget. Aenean sodales lorem quis nisl interdum sagittis. Aliquam lobortis, nunc non gravida euismod, neque neque accumsan urna, nec efficitur ante nisl vel nunc. Ut et laoreet orci. Vivamus vestibulum scelerisque quam vel ullamcorper.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default ReviewList;