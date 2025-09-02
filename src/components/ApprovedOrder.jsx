import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';

function ApprovedOrder() {

    const [orderData, setOrderData] = useState();

    const getOrder = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json');
        const data = await res.json();

        const data2 = Object.entries(data).map(([key, value]) => ({
            'firebaseId': key,
            ...value
        }))

        const data3 = data2?.filter((item) => item?.approved == true);

        setOrderData(data3);
    }


    useEffect(() => {
        getOrder();
    }, [])

    return (
        <>

            {console.log(orderData, '--------orderData--------')}

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
                                    <table className="table table-hover ">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Details</th>
                                                <th scope="col">items</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orderData?.map((item, index) => (
                                                    <>
                                                        <tr key={index}>
                                                            <td>{index + 1}.</td>
                                                            <td>{item.name}</td>
                                                            <td>
                                                                <div className='row'>
                                                                    <div className='col-sm-6'>
                                                                        <div className='detail_box'>
                                                                            <span className='detail_item'><b>Email:</b> {item.email}</span>
                                                                            <span className='detail_item'><b>Postcode:</b> {item.postcode}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-sm-6'>
                                                                        <div className='detail_box'>
                                                                            <span className='detail_item'><b>Mobile:</b> {item.mobile}</span>
                                                                            <span className='detail_item'><b>Address:</b>{item.address}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
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

export default ApprovedOrder;