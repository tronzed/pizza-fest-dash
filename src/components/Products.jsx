import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {

    const [productData, setProduct] = useState();

    const getProduct = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/products.json');
        const data = await res.json();
        const data2 = Object.values(data);
        setProduct(data2);
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>

            {console.log(productData, 'asdasdw')}

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


                            <div className="card">

                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
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
        </>
    );
}

export default Products;