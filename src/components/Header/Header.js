import React from "react";
import "../Header/Header.css";
import puma from '../img/puma.png';
import photo from '../img/photo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component{
    render() {
      return <div>
        <div className="container-home">
        <div className="d-none d-flex align-items-center bars">
            <FontAwesomeIcon className="ms-5 mt-3 text-danger iconBars" icon={ faBars}/>
         </div>
        <header className="header__section">
            <div className="container py-3 d-flex align-items-center justify-content-between ">
          <div>
            <img src={puma} alt="rasm" className="logo" />
            <p className="fw-bold ms-5">Puma</p>
          </div>
          <ul className="d-flex m-0 p-0">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#counter">About</a>
            </li>
            <li>
              <a href="#about">Feature</a>
            </li>
            <li>
              <a href="#gallery">Gallary</a>
            </li>
          </ul>
          <button className="btn">Buy Now</button>
      </div>
        </header>
        


        <div className="container text d-flex justify-content-between">
           <div>
            <h1 className="title mb-5">Life is better <br/> in running <br/> <span>shoes</span>.</h1>
            <p className="subtitle mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Iure perferendis atque obcaecati</p>
         </div>
            <div className="home__photo mt-5">
              <img className="photo1 mt-5" src={photo} alt="rasm" />
            </div>

          </div>
          
          <div className="container py-0">
          <div className="d-flex w-50 mt-5 p-2 home__club">
              <div className="home__box">
              <h5>Brand</h5>
              <p>Puma</p>
            </div>
            <div className="home__box">
              <h5>Person</h5>
              <p>man</p>
            </div>
            <div className="home__box">
              <h5>Size</h5>
              <p>large</p>
            </div>
            <div className="home__box">
              <h5>Price</h5>
              <p>$150</p>
            </div>
            <div className="mt-3 ms-4 home__box">
              <button>
                Buy Now
              </button>
            </div>
          </div>
          </div>


       </div>
      </div>
      
    }
}
  
export default Header;