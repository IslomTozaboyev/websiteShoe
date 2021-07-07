import React from 'react';
import "../Info/info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import info__photo from "../img/info__photo.png";
import info__avatar from "../img/info__avatar.png"


class Info extends React.Component{
    render() {
        return <div className="container info">
            <div className="row">
            <h1>Testimonials</h1>
                <div className="col-12 col-md-12 d-flex">
                    <div className="info__text">
                        <img className="mt-5" src={info__photo} alt="rasm" />
                    </div>
                    <div className="info__rezume">
                        <div className="d-flex justify-content-between">
                            <img className="info__avatar" src={info__avatar} alt="rasm" />
                            <div className="mt-2">
                            <FontAwesomeIcon className="ms-5 text-danger icon" icon={ faArrowAltCircleLeft}/>
                            <FontAwesomeIcon className="ms-5 text-danger icon" icon={ faArrowCircleRight}/>
                           </div>
                       </div>
                        <h4 className="mb-3">Their services was best and friendly</h4>
                        <p className="mb-4 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus tempor id faucibus quam lobortis.</p>
                        <h4 className="m5-4">Abram Korsgaard</h4>
                        <small>Athletic</small>
                    </div>
                </div>
            
            </div>
        </div>
    }
}

export default Info;