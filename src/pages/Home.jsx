import React from 'react';
import Slider from '../component/Slider';
import 'swiper/css';
import 'swiper/css/navigation';
import PopulerSection from '../component/PopulerSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopulerSection></PopulerSection>
        </div>
    );
};

export default Home;