import React from 'react';
import "../Contact/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import contact__img1 from "../img/contact__img1.png";
import contact__img2 from "../img/contact__img2.png";
import contact__img3 from "../img/contact__img3.png";
import contact__img4 from "../img/contact__img4.png";


class Contact extends React.Component{
    render() {
        return <div className="container contact" id="gallery">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h5>GALLARY</h5>
                    <h1>40+ YEARS’ EXPERIENCE</h1>
                    <div className="d-flex justify-content-between catigories mt-4">
                        <div className="d-flex ">
                        <p>Categories:</p>
                        <p>All</p>
                        <p>Male</p>
                        <p>Female</p>
                        <p>Kids</p>
                        </div>
                        
                        <div>
                        < FontAwesomeIcon className="icon me-4 text-danger" icon={faArrowCircleLeft} />
                        < FontAwesomeIcon className="icon me-5 text-danger" icon={faArrowCircleRight} />
                        </div>
                    </div>

                    <div className="d-flex">

                    <div className="contact__box"> 
                        <img className="contact__img1 ms-3" src={contact__img1} alt="" />
                      
                        <div className="ms-5">
                        <h6 className="fw-bold mb-3">Puma RS-X Bold</h6>

                            <div className="d-flex"> 
                                <p>Size:</p>
                                <p className="ms-2 fw-bold">Dubble-XL</p>
                            </div>

                            <div className="d-flex"> 
                                <p>Price:</p>
                                <p className="ms-2 fw-bolder">$200</p>
                            </div>

                            <button>
                                Buy Now
                            </button>
                        </div>
                        </div>
                        
                        <div className="contact__box"> 
                        <img className="contact__img1 ms-3" src={contact__img2} alt="" />
                      
                        <div className="ms-5">
                        <h6 className="fw-bold mb-3">Puma Sneakers</h6>

                            <div className="d-flex"> 
                                <p>Size:</p>
                                <p className="ms-2 fw-bold">Dubble-XL</p>
                            </div>

                            <div className="d-flex"> 
                                <p>Price:</p>
                                <p className="ms-2 fw-bolder">$180</p>
                            </div>

                            <button>
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="contact__box"> 
                        <img className="contact__img1 ms-3" src={contact__img3} alt="" />
                      
                        <div className="ms-5">
                        <h6 className="fw-bold mb-3">Puma Ferrari</h6>

                            <div className="d-flex"> 
                                <p>Size:</p>
                                <p className="ms-2 fw-bold">Dubble-XL</p>
                            </div>

                            <div className="d-flex"> 
                                <p>Price:</p>
                                <p className="ms-2 fw-bolder">$190</p>
                            </div>

                            <button>
                                Buy Now
                            </button>
                        </div>
                        </div>
                        
                        <div className="contact__box"> 
                        <img className="contact__img1 ms-3" src={contact__img4} alt="" />
                      
                        <div className="ms-5">
                        <h6 className="fw-bold mb-3">Puma Running</h6>

                            <div className="d-flex"> 
                                <p>Size:</p>
                                <p className="ms-2 fw-bold">Dubble-XL</p>
                            </div>

                            <div className="d-flex"> 
                                <p>Price:</p>
                                <p className="ms-2 fw-bolder">$200</p>
                            </div>

                            <button>
                                Buy Now
                            </button>
                        </div>
                    </div>
                        
                 </div>

                    
                    

                </div>
            </div>
        </div>
    }
}


export default Contact;