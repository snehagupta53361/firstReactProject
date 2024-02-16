import React from 'react'
import {Carousel} from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className='services'>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showThumbs = {false}
          showArrows = {false}
          showStatus = {false}        
          >
            <div>
                <img src={img1} alt="full-stack-1"/>
                <p className="legend">Lorem ipsum</p>
            </div>

            <div>
                <img src={img2} alt="full-stack-2"/>
                <p className="legend">Lorem ipsum</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services;