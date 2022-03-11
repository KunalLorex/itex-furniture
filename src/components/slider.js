import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sl1 from "./common/images/EM7aFR1.jpg";
import sl2 from "./common/images/o383wic.jpg";
import sl3 from "./common/images/oN9ZWzC.jpg";
import sl4 from "./common/images/zoMgUUA.jpg";
// import React from 'react';
import { Carousel } from 'react-bootstrap';

// import image1 from './../assets/images/1.jpg';
// import image2 from './../assets/images/2.jpg';
// import image3 from './../assets/images/3.jpg';

// function ImageSlider() {
//     let settings = {
//         dot: true,
//         infinite: true,
//         speed:500,
//         slidestoShow: true,
//         slidestoScroll: true,
//         cssEase:"linear"
//     };
//         return(
//             <Slider {...settings}>
//                 <div className="card-wrapper">
//                     <div className="card">
//                         <div className="card-image">
//                             <img src="https://media.eastwestfurniture.net/2022/01/aa2c4d23-v027ab264-6-scaled.jpg" height="300" width="300"/>
//                             </div>
//                             <ul class="social-items">
//                                 <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-email"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-call"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-instagram"></i></a></li>
//                             </ul>
//                             <div className="details">
//                                 <h2>Double Bed-FURNITURES<span class="job-title">EZYfurniture</span></h2>
//                                 </div>
//                         </div>
//                     </div>

//             </Slider>
//         )
        
// }


const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{
            marginTop: "1%"
          }
              
          }
          src={sl3}
          alt="First slide"
          height="650 px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={sl4}
          alt="Third slide"
          style={{
            marginTop: "1%"
          }
              
          }
          height="650 px"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={sl2}
          alt="Third slide"
          height="650px"
          style={{
            marginTop: "1%"
          }
              
          }
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={sl1}
          alt="Third slide"
          height="650px"
          style={{
            marginTop: "1%"
          }
              
          }
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  )
}

export default CarouselContainer;
// export default ImageSlider;