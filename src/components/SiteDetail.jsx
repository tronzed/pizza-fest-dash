import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function SiteDetail() {

    const [names, setName] = useState();
    const [prices, setPrice] = useState();
    const [texts, setText] = useState();

    const [LoaderShow, setLoaderShow] = useState(false);

    const navigate = useNavigate();


    const addData = (e) => {

        e.preventDefault();

        let name = names;
        let price = prices;
        let text = texts;

        const data = { 'id:': '22', name, price, text };

        fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/products.json`, {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            navigate('/products-list')
            // setLoaderShow(true)
        });
    }


    return (
        <>
            <div className='wrapper'>
                <SideBar />
                <div className="main-panel">
                    <Header />

                    <div className="container">
                        <div className="page-inner">
                            <div className="page-header">
                                <h4 className="page-title">Site Detail</h4>
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
                                        <a href="#">Site Detail</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="page-category">

                                {LoaderShow && (
                                    <Loader />
                                )}

                                <form onSubmit={addData}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="formFile" class="col-form-label">Store Logo</label>
                                                        <input class="form-control" type="file" id="formFile"></input>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Email</label>
                                                        <input type="mail" className="form-control input-full" onChange={(e) => setName(e.target.value)} id="inlineinput" placeholder="Enter Mail" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Address</label>
                                                        <input type="text" className="form-control input-full" onChange={(e) => setPrice(e.target.value)} id="inlineinput" placeholder="Enter Address" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Twitter</label>
                                                        <input type="text" className="form-control input-full" onChange={(e) => setPrice(e.target.value)} id="inlineinput" placeholder="Enter Twitter Link" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Facebook</label>
                                                        <input type="text" className="form-control input-full" onChange={(e) => setPrice(e.target.value)} id="inlineinput" placeholder="Enter Facebook Link" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">YouTube</label>
                                                        <input type="text" className="form-control input-full" onChange={(e) => setPrice(e.target.value)} id="inlineinput" placeholder="Enter YouTube Link" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Linkedin</label>
                                                        <input type="text" className="form-control input-full" onChange={(e) => setPrice(e.target.value)} id="inlineinput" placeholder="Enter Linkedin Link" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="formFile" class="col-form-label">Banner Img</label>
                                                        <input class="form-control" type="file" id="formFile"></input>
                                                    </div>
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Heading</label>
                                                        <input type="mail" className="form-control input-full" onChange={(e) => setName(e.target.value)} id="inlineinput" placeholder="Enter Banner Heading" />
                                                    </div>
                                                </div>


                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Sub Heading</label>
                                                        <input type="text" className="form-control input-full" onChange={(e) => setPrice(e.target.value)} id="inlineinput" placeholder="Enter Sub Heading" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card-action">
                                            <div className='button_box'>
                                                <button type='submit' className="btn btn-success">Submit</button>
                                                <button className="btn btn-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div >

                    <Footer />
                </div >
            </div>
        </>
    );
}

export default SiteDetail;