import React from 'react';
import "../Footer/footer.css";
import footerPuma from "../img/footerPuma.png";
import icon__messenger from "../img/icon__messenger.png"

class Footer extends React.Component{
    render() {
        return (
            <footer>
                 <div className="container footer">
                  <div className="row">
                    <div className="col-12 col-md-12">
                            <ul className="d-flex">
                                <div>
                                <li>
                                  <div className="d-flex">
                                    <img className="footerPuma" src={footerPuma} alt="rasm" />
                                    <p className="fw-bold">Puma</p>
                                </div>
                                </li>

                                <li className="mt-2">
                                10 New Town Street, V2 5NW, Newstate, USA.
                                </li>

                                <li className="mt-2">shovasatkhira88@gmail.com</li>

                                <li className="mt-0">
                                 <img src={icon__messenger} alt="rasm" />
                                </li>
                                </div>

                                <div>
                                    <li>
                                        <h4>Our services</h4>
                                    </li>
                                    <li>About us</li>
                                    <li>Feature</li>
                                    <li>Gallary</li>
                                </div>

                                <div>
                                    <li>
                                        <h4>Support</h4>
                                    </li>
                                    <li>Privacy and Policy</li>
                                    <li>Terms and Condition</li>
                                    <li>Support System</li>
                                </div>

                                <div>
                                    <li>
                                        <h4>Contact us</h4>
                                    </li>
                                    <li>Contact us</li>
                                    <li>Mail address</li>
                                </div>

                            </ul>

                            <div className="text-center my-5">
                            Copyright 2021 The PUMA All Rights Reserved.
                            </div>
                            
                    </div>
                </div>
            </div>
           </footer>
        )
    }
}

export default Footer;