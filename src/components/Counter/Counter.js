import React from 'react'
import "../Counter/Counter.css"
import photo1 from "../img/counter-img1.png"
import photo2 from "../img/counter-img2.png"

class Counter extends React.Component{
   render() {
     return <div className="container py-3 counter d-flex" id="counter">
       <div className="row">
         <div className="col-12 col-sm-6 col-md-6 col-lg-12">
         <div>
            <p className="subtitle">VIDEO</p>
            <h1 className="title">Desire the feel of <br /> satisfaction.</h1>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Egestas leo ultrices <br /> commauris risus.</p>
       </div>
       
       <div>
         <img className="counter__img1" src={photo1} alt="rasm" />
         <img className="counter__img2" src={photo2} alt="rasm" />
       </div>
         </div>
     </div>

        </div>
    }
}
  
export default Counter;
  