import React from 'react';
import Slider from '../component/Slider';
import 'swiper/css';
import 'swiper/css/navigation';
import PopulerSection from '../component/PopulerSection';
import MeetOurExparts from '../component/MeetOurExparts';
import WinterSection from '../component/WinterSection';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <PopulerSection></PopulerSection>
            <MeetOurExparts></MeetOurExparts>
            <WinterSection></WinterSection>
        </div>
    );
};

export default Home;