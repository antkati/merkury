import React from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <svg 
      className='promo-2__arrow--prev'
      onClick={onClick} 
      version='1.1' 
      id='Capa_1' 
      xmlns='http://www.w3.org/2000/svg' 
      xmlnsXlink='http://www.w3.org/1999/xlink' 
      x='0px' 
      y='0px' 
      viewBox='0 0 52 52' 
      xmlSpace='preserve'>
      <g>
        <path d='M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'/>
        <path d='M32,36.783V15.438L14.043,25.806L32,36.783z M30,33.217l-12.043-7.362L30,18.902V33.217z'/>
      </g>
    </svg>
  )
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <svg 
      className='promo-2__arrow--next'
      onClick={onClick} 
      version='1.1' 
      id='Capa_1' 
      xmlns='http://www.w3.org/2000/svg' 
      xmlnsXlink='http://www.w3.org/1999/xlink' 
      x='0px' 
      y='0px' 
      viewBox='0 0 52 52' 
      xmlSpace='preserve'>
      <g>
        <path d='M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'/>
        <path d='M32,36.783V15.438L14.043,25.806L32,36.783z M30,33.217l-12.043-7.362L30,18.902V33.217z'/>
      </g>
    </svg>
  )
}

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <Slider {...settings}>
        <div>
          <div className='promo-2__box__content'>
            <h2 className='promo-2__h2'>Drag & Drop</h2>
            <div className='promo-2__desc'>
              <p className='promo-2__desc__p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className='promo-2__desc__p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='promo-2__box__content'>
            <h2 className='promo-2__h2'>Simple Usage</h2>
            <div className='promo-2__desc'>
              <p className='promo-2__desc__p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className='promo-2__desc__p'>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;