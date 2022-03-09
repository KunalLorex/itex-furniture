import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          src="https://thumbs.dreamstime.com/b/trevi-fountain-night-11177557.jpg"
          alt="First slide"
          height="600 px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/3627756.jpg"
          alt="Third slide"
          style={{
            marginTop: "1%"
          }
              
          }
          height="600 px"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/8f/2c/ed/8f2ceddd56d2ec66fed333ca6aa0ef1b--puja-room-hindu-temple.jpg"
          alt="Third slide"
          height="600px"
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
          src="https://us.123rf.com/450wm/czdistagon/czdistagon1911/czdistagon191100054/134118443-luxurious-bedroom-with-bed-and-bedside-tables-and-a-mirror-concept-interior-home-comfort-hotel-.jpg?ver=6"
          alt="Third slide"
          height="600px"
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