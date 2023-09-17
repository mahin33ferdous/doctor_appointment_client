import React from 'react';
import Banner from '../Banner/Banner';
import InfoCardss from '../../InfoCard/InfoCardss';
import MakeAppointment from './MakeAppoinment/MakeAppointment';
import Reviews from './Review/Reviews';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCardss></InfoCardss>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;