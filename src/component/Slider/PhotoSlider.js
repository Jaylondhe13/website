// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styles from './PhotoSlider.module.css'; // Importing CSS Modules


// const PhotoSlider = ({ photos }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     beforeChange: (current, next) => setCurrentSlide(next),
//   };

//   return (
//     <div className={styles.photoSlider}>
//       <Slider {...settings}>
//         {photos.map((photo, index) => (
//           <div key={index}>
//             <img src={photo} alt={`Photo ${index}`} className={styles.photo} width={255} height={193}/>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PhotoSlider;
