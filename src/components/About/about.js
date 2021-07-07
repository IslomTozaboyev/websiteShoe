import React from 'react';
import "../About/about.css";
import aboutPhoto1 from "../img/aboutPhoto1.png";
import aboutPhoto2 from "../img/aboutPhoto2.png";
import aboutPhoto3 from "../img/aboutPhoto3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

class About extends React.Component{
    render() {
        return <div className="container about" id="about">
            <div className="row">
                <div className="about__size" >
                    <div className="about__text">
                        <p>FEATURE</p>
                        <h1>We have best feature in Shoes</h1>
                  </div>
                    <div className="d-flex about__Ybox">
                    <div className="about__box mt-5">
                        <img src={ aboutPhoto1} alt="rasm" className="about__img1 mb-4" />
                        <h4 className="mb-3">Quality</h4>
                        <p>Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul</p>
                            <div>
                                  <button className="border-0 mt-3">
                                  Read more  <FontAwesomeIcon className="text-danger" icon={faArrowAltCircleRight} /> 
                                </button>
                            </div>
                    </div>

                    <div className="about__box about__box2 mt-5">
                        <img src={ aboutPhoto2} alt="rasm" className="about__img1 mb-4" />
                        <h4 className="mb-3">Flexible</h4>
                        <p>Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul</p>
                        <button className="border-0 mt-3">
                        Read more <FontAwesomeIcon className="text-danger" icon={faArrowAltCircleRight} />
                            </button>
                    </div>

                    <div className="about__box mt-5">
                        <img src={ aboutPhoto3} alt="rasm" className="about__img1 mb-4" />
                        <h4 className="mb-3">Long Lasting</h4>
                        <p>Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul</p>
                        <button className="border-0 mt-3">
                        Read more   <FontAwesomeIcon className="text-danger" icon={faArrowAltCircleRight} />
                        </button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    }
}

export default About;