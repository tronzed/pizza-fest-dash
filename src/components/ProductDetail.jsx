import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from './Loader';

function ProductDetail() {

    const [editName, setEditName] = useState();
    const [editPrice, setEditPrice] = useState();
    const [editText, setEditText] = useState();
    const [LoaderShow, setLoaderShow] = useState(true);

    const { id } = useParams();

    const getProduct = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/products.json');
        const data = await res.json();
        const data2 = Object.values(data);
        const data3 = data2.find((item) => item.id == id);

        setEditName(data3?.name);
        setEditPrice(data3?.price);
        setEditText(data3?.text);
        setLoaderShow(false)
    }

    const editData = (e) => {

        e.preventDefault();

        // let id = editText;
        let name = editName;
        let price = editPrice;
        let text = editText;

        const data = { id, name, price, text };

        fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/products/${id - 1}.json`, {
            method: 'PUT',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            setLoaderShow(true)
            getProduct();
        });
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>

            <SideBar />
            <div className="main-panel">
                <Header />

                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h4 className="page-title">Products</h4>
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
                                    <a href="#">Products</a>
                                </li>
                            </ul>
                        </div>
                        <div className="page-category">


                            {LoaderShow && (

                                <Loader />

                            )}


                            <form onSubmit={editData}>
                                <div className="card">
                                    <div className="card-body">
                                        <form action="">
                                            <div className='row'>
                                                <div className='col-sm-6'>
                                                    <div class="form-group form-inline">
                                                        <label for="inlineinput" class="col-form-label">Name</label>
                                                        <input type="text" class="form-control input-full" value={editName} onChange={(e) => setEditName(e.target.value)} id="inlineinput" placeholder="Enter Name" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div class="form-group form-inline">
                                                        <label for="inlineinput" class="col-form-label">Price</label>
                                                        <input value={editPrice} type="number" class="form-control input-full" onChange={(e) => setEditPrice(e.target.value)} id="inlineinput" placeholder="Enter Price" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <div class="form-group form-inline">
                                                        <label for="inlineinput" class="col-form-label">Detail</label>
                                                        <textarea value={editText} class="form-control" id="comment" onChange={(e) => setEditText(e.target.value)} rows="5"></textarea>
                                                    </div>
                                                </div>
                                                {/* <div className='col-sm-6'>
                                                <div class="form-group form-inline">
                                                    <label for="inlineinput" class="col-form-label">Detail</label>
                                                    <input type="file" class="form-control-file"></input>
                                                </div>
                                            </div> */}

                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-action">
                                        <div className='button_box'>
                                            <button type='submit' class="btn btn-success">Submit</button>
                                            <button class="btn btn-danger">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div >

                <Footer />
            </div >
        </>
    );
}

export default ProductDetail;