import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { use, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import Loader from './Loader';

function Order() {

    const [orderData, setOrderData] = useState();
    const [loader, setLoader] = useState(true);

    const [cardOrders, setCardOrders] = useState(0);
    const [cardApproved, setCardApproved] = useState(0);
    const [cardCanceled, setCardCanceled] = useState(0);
    const [cardEarning, setCardEarning] = useState(0);



    const getOrder = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json');
        const data = await res.json();

        const data2 = Object.entries(data).map(([key, value]) => ({
            'firebaseId': key,
            ...value
        }))
        setOrderData(data2.reverse());
        setLoader(false);


        let tempOrders = data2.length;
        let tempApproved = data2.filter((item) => item.approved === true).length;
        let tempCanceled = data2.filter((item) => item.approved === false).length;
        // let tempEarning = data2.cartBox.filter((item) => item.price);



        setCardOrders(tempOrders);
        setCardApproved(tempApproved);
        setCardCanceled(tempCanceled);
        // setCardEarning(tempEarning);


        console.log(data2, '===============tempEarning=================');

    }

    const approveOrder = async (id) => {
        const data = { 'approved': true }
        fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/orders/${id}.json`, {
            method: 'PATCH',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            getOrder();
            setLoader(false);
        })
    }


    const cancelOrder = async (id) => {
        const data = { 'approved': false }
        fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/orders/${id}.json`, {
            method: 'PATCH',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            getOrder();
            setLoader(false);
        })
    }

    useEffect(() => {
        getOrder();
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

                            <div class="row">
                                <div class="col-sm-6 col-md-3">
                                    <div class="card card-stats card-round">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-icon">
                                                    <div class="icon-big text-center icon-primary bubble-shadow-small">
                                                        <i class="fas fa-users"></i>
                                                    </div>
                                                </div>
                                                <div class="col col-stats ms-3 ms-sm-0">
                                                    <div class="numbers">
                                                        <p class="card-category">Orders</p>
                                                        <h4 class="card-title">{cardOrders}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3">
                                    <div class="card card-stats card-round">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-icon">
                                                    <div class="icon-big text-center icon-info bubble-shadow-small">
                                                        <i class="fas fa-user-check"></i>
                                                    </div>
                                                </div>
                                                <div class="col col-stats ms-3 ms-sm-0">
                                                    <div class="numbers">
                                                        <p class="card-category">Approved Orders</p>
                                                        <h4 class="card-title">{cardApproved}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3">
                                    <div class="card card-stats card-round">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-icon">
                                                    <div class="icon-big text-center icon-success bubble-shadow-small">
                                                        <i class="fas fa-luggage-cart"></i>
                                                    </div>
                                                </div>
                                                <div class="col col-stats ms-3 ms-sm-0">
                                                    <div class="numbers">
                                                        <p class="card-category">Canceled Order</p>
                                                        <h4 class="card-title">{cardCanceled}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 ">
                                    <div class="card card-stats card-round">
                                        <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-icon">
                                                    <div class="icon-big text-center icon-secondary bubble-shadow-small">
                                                        <i class="far fa-check-circle"></i>
                                                    </div>
                                                </div>
                                                <div class="col col-stats ms-3 ms-sm-0">
                                                    <div class="numbers">
                                                        <p class="card-category">Lifetime Earning</p>
                                                        <h4 class="card-title">$ 576</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="page-category">
                                <div className="card card_box">

                                    <div className="card-body table-responsive">
                                        <table className="table table-hover ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Customer Name</th>
                                                    <th scope="col">Details</th>
                                                    <th scope="col">items</th>
                                                    {/* <th scope="col">Total</th> */}
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orderData?.map((item, index) => (
                                                        <>
                                                            <tr key={index}>
                                                                <td><span className='th_box th_no_box'>#</span> {index + 1}.</td>
                                                                <td><span className='th_box'>Name</span>{item.name}</td>
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
                                                                <td>
                                                                    <span className='th_box'>Items</span>
                                                                    {
                                                                        item?.cartBox?.map((box, index) => (
                                                                            <>
                                                                                <p>{box?.name}</p>
                                                                            </>
                                                                        ))
                                                                    }
                                                                </td>
                                                                {/* <td></td> */}
                                                                <td>
                                                                    <div className='button_box'>
                                                                        {
                                                                            item?.approved === true ? (

                                                                                <button class="btn btn-success btn-border">Approved</button>

                                                                            ) : item?.approved === false ? (
                                                                                <button class="btn btn-danger btn-border">Canceled</button>

                                                                            ) : (
                                                                                <>
                                                                                    <button class="btn btn-success btn-border" onClick={() => { setLoader(true); approveOrder(item?.firebaseId); }}>Approve</button>
                                                                                    <button class="btn btn-danger btn-border" onClick={() => { setLoader(true); cancelOrder(item?.firebaseId); }}>Cancel</button>
                                                                                </>
                                                                            )
                                                                        }
                                                                    </div>
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
            </div>
        </>
    );
}

export default Order;