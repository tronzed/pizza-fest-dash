import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from './Loader';

function Bestseller() {

    const [productData, setProduct] = useState();
    const [loader, setLoader] = useState(true);
    const [checked, setChecked] = useState(false);


    const getProduct = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/products.json');
        const data = await res.json();
        const data2 = Object.values(data);
        
        const data3 = data2.filter((item)=> item.bestSeller === true)
        
        setProduct(data3);
        setLoader(false);
    }

    function addBestSeller(state, id) {

        const data = { 'bestSeller': state }

        fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/products/${id - 1}.json`, {
            method: 'PATCH',
            header: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(()=>{
            getProduct();
        })

    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <div className='wrapper'>
                <SideBar />
                <div className="main-panel">
                    <Header />

                    {loader && (
                        <Loader />
                    )}

                    <div className="container">
                        <div className="page-inner">
                            <div className="page-header">
                                <h4 className="page-title">Best Seller</h4>
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
                                        <a href="#">Best Seller</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="page-category">

                                <div className='add_box'>
                                    <Link to="/add-product" class="btn btn-primary">Add New</Link>
                                </div>
                                <div className="card">

                                    <div className="card-body table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Bestseller</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    productData?.map((item, index) => (
                                                        <>
                                                            <tr key={index}>
                                                                <td>{item.id}.</td>
                                                                <td>{item.name}</td>
                                                                <td>${item.price}</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <input
                                                                            onChange={(e) => addBestSeller(e.target.checked, item.id)}
                                                                            checked={item.bestSeller}
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            role="switch"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td><Link to={`/product-edit/${item.id}`} class="btn btn-primary btn-border">Edit</Link></td>
                                                            </tr >
                                                        </>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
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

export default Bestseller;