import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Slider.js';
import animateScrollTo from 'animated-scroll-to';

ReactDOM.render(<Carousel />, document.getElementById('slider-wrap'));

const featuresLink = document.getElementById('features');
featuresLink.onclick = () => {
    const featuresSection = document.getElementById('features-section');
    animateScrollTo(featuresSection);
}

const priceLink = document.getElementById('pricing');
priceLink.onclick = () => {
    const priceSection = document.getElementById('price-section');
    animateScrollTo(priceSection);
}