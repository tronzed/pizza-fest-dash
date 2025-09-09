import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import { useState } from 'react'
import Loader from './Loader';

function SiteDetail() {

    const [LoaderShow, setLoaderShow] = useState(false);

    const [storeLogo, setStoreLogo] = useState();
    const [storeLogoUrl, setStoreLogoUrl] = useState(false);
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [twitter, setTwitter] = useState();
    const [facebook, setFacebook] = useState();
    const [youTube, setYouTube] = useState();
    const [linkedin, setLinkedin] = useState();
    const [bannerImg, setBannerImg] = useState();
    const [bannerImgUrl, setBannerImgUrl] = useState(false);
    const [bannerHeading, setBannerHeading] = useState();
    const [bannerSubHeading, setBannersubHeading] = useState();

    const [editOn, setEditOn] = useState();

    const submitStoreDetail = async (e) => {

        e.preventDefault();

        setLoaderShow(true);

        const formBox = new FormData();
        formBox.append('file', storeLogo);
        formBox.append('upload_preset', 'tron_file_zed');
        formBox.append('Cloud_name', 'dyxkr50bl');

        const res = await fetch('https://api.cloudinary.com/v1_1/dyxkr50bl/image/upload', {
            method: "POST",
            body: formBox,
        });

        const temp_url_logo = await res.json();
        const logoUploadUrl = temp_url_logo.secure_url;

        setStoreLogoUrl(logoUploadUrl);

        const data = { email, address, twitter, facebook, youTube, linkedin, bannerHeading, bannerSubHeading, logoUploadUrl }

        fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/site_detail.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('added');
            setLoaderShow(false);
        })
    }


    const editSubmitStoreDetail = (e) => {
        e.preventDefault();
        console.log('====testsetsetsetset====');
    }


    const getEditData = async () => {

        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/site_detail/-OZe6lFzzBE2peUm7FV4.json');

        const data = await res.json();

        if (data) {
            setEditOn(true);
            console.log(data, '--------yes deta--------');
        } else {
            setEditOn(false);
            console.log(data, '--------no deta--------');
        }

        setStoreLogoUrl(data?.logoUploadUrl);
        setEmail(data?.email);
        setAddress(data?.address);
        setTwitter(data?.twitter);
        setFacebook(data?.facebook);
        setYouTube(data?.youTube);
        setLinkedin(data?.linkedin);
        setBannerHeading(data?.bannerHeading);
        setBannersubHeading(data?.bannerSubHeading);

    }


    useState(() => {
        getEditData();
    }, [])


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

                                <form onSubmit={editOn === true ? editSubmitStoreDetail : submitStoreDetail}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-sm-4'>

                                                    <div className="form-group form-inline">
                                                        <label for="formFile" class="col-form-label">Store Logo</label>
                                                        <input class="form-control" type="file" id="formFile" onChange={(e) => setStoreLogo(e.target.files[0])} />
                                                    </div>

                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Email</label>
                                                        <input type="mail" className="form-control input-full" id="inlineinput" value={email} placeholder="Enter Mail" onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Address</label>
                                                        <input type="text" className="form-control input-full" id="inlineinput" value={address} placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Twitter</label>
                                                        <input type="text" className="form-control input-full" id="inlineinput" value={twitter} placeholder="Enter Twitter Link" onChange={(e) => setTwitter(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Facebook</label>
                                                        <input type="text" className="form-control input-full" id="inlineinput" value={facebook} placeholder="Enter Facebook Link" onChange={(e) => setFacebook(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">YouTube</label>
                                                        <input type="text" className="form-control input-full" id="inlineinput" value={youTube} placeholder="Enter YouTube Link" onChange={(e) => setYouTube(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Linkedin</label>
                                                        <input type="text" className="form-control input-full" id="inlineinput" value={linkedin} placeholder="Enter Linkedin Link" onChange={(e) => setLinkedin(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                {/* <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="formFile" class="col-form-label">Banner Img</label>
                                                        <input class="form-control" type="file" id="formFile" onChange={(e) => setBannerImg(e.target.files[0])} />
                                                    </div>
                                                </div> */}
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Heading</label>
                                                        <input type="mail" className="form-control input-full" id="inlineinput" value={bannerHeading} placeholder="Enter Banner Heading" onChange={(e) => setBannerHeading(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group form-inline">
                                                        <label for="inlineinput" className="col-form-label">Sub Heading</label>
                                                        <input type="text" className="form-control input-full" id="inlineinput" value={bannerSubHeading} placeholder="Enter Sub Heading" onChange={(e) => setBannersubHeading(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card-action">
                                            <div className='button_box'>
                                                <button type='submit' className="btn btn-success">{editOn === true ? "Update" : "Submit"}</button>
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