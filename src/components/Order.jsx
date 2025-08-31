import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useEffect, useState } from 'react'

function Order() {

    const [orderData, setOrderData] = useState();

    const getOrder = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json');
        const data = await res.json();
        const data2 = Object.values(data);
        setOrderData(data2);
    }

    useEffect(() => {
        getOrder();
    }, [])

    return (
        <>

            {console.log(orderData, 'asdasdw')}

            <SideBar />
            <div className="main-panel">
                <Header />

                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h4 className="page-title">Orders</h4>
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
                                    <a href="#">Orders</a>
                                </li>
                            </ul>
                        </div>
                        <div className="page-category">


                            <div className="card">

                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Details</th>
                                                <th scope="col">items</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orderData?.map((item, index) => (
                                                    <>
                                                        <tr>
                                                            <td></td>
                                                            <td>{item.name}</td>
                                                            <td>
                                                                <b>Address:</b><br /> {item.address}<br /><hr />
                                                                <b>Postcode:</b><br /> {item.postcode}<br /><hr />
                                                                <b>Mobile:</b><br /> {item.mobile}<br /><hr />
                                                                <b>Email:</b><br /> {item.email}
                                                            </td>
                                                            <td>{

                                                                item?.cartBox?.map((box, index) => (
                                                                    <>

                                                                        <p>{box?.name}</p>

                                                                    </>
                                                                ))

                                                            }
                                                            </td>
                                                            <td></td>
                                                            <td>
                                                                <button class="btn btn-sm btn-success">Approve</button>
                                                                <button class="btn btn-sm btn-danger">Cancel</button>
                                                            </td>
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

export default Order;