import React from 'react';
import Banner from '../Home/Banner/Banner';
import InfoCards from '../Home/InfoCards/InfoCards';
import AllServices from './AllServices/AllServices';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Terms from './Terms/Terms';
import SayReviews from '../Home/SayReviews/SayReviews';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <AllServices></AllServices>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <SayReviews></SayReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;