import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const [names, setName] = useState();
    const [prices, setPrice] = useState();
    const [texts, setText] = useState();
    const [LoaderShow, setLoaderShow] = useState(false);

    const [image, setImage] = useState();
    const [imgUrl, setImgUrl] = useState();

    const navigate = useNavigate();

    const addData = async (e) => {

        let varImgUrl = "";

        e.preventDefault();

        const formData = new FormData();

        formData.append("file", image);
        formData.append("upload_preset", "tron_file_zed");
        formData.append("cloud_name", "dyxkr50bl");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dyxkr50bl/image/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        const uploadURl = await res.json();

        setImgUrl(uploadURl.secure_url);
        varImgUrl = uploadURl.secure_url;

        let name = names;
        let price = prices;
        let text = texts;
        let img_url = varImgUrl;

        const data = { 'id:': '22', name, price, text, img_url };

        fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/products.json`, {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            // navigate('/products-list')
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
                                <h4 className="page-title">Add Products</h4>
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
                                        <a href="#">Add Products</a>
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
                                                <div className='col-sm-6'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Name</label>
                                                        <input type="text" className="form-control input-full" onChange={(e) => setName(e.target.value)} id="inlineinput" placeholder="Enter Name" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Price</label>
                                                        <input type="number" className="form-control input-full" onChange={(e) => setPrice(e.target.value)} id="inlineinput" placeholder="Enter Price" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Detail</label>
                                                        <textarea className="form-control" id="comment" onChange={(e) => setText(e.target.value)} rows="5"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div className='img_box'>
                                                        <img src={imgUrl} alt="" />
                                                    </div>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Detail</label>
                                                        <input type="file" className="form-control-file" onChange={(e)=>setImage(e.target.files[0])}></input>
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

export default AddProduct;