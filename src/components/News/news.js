import React from 'react';
import "./news.css";
import puma__logo from "../img/puma__logo.png"

class News extends React.Component{
    render() {
        return <div className="container news">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="d-flex">

                        <div>
                            <img src={puma__logo} alt="rasm" />
                        </div>

                        <div className="news__text">
                            <h3 className="mb-4">Sign up to our Newsletter</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu  sagittis, Atiam lorem sed justo amet viverra in a.</p>
                            <div className="d-flex">
                                <input className="w-100 mt-5" type="text" placeholder="    Enter your email address"/>
                                <button className="border-0 mt-5 w-25 text-white">
                                    Send
                                </button>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    }
}

export default News;
