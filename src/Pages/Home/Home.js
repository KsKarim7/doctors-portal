import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner/Banner';
import Info from './Info';
import Service from './Service';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Appointment  ></Appointment>
            <Testimonials></Testimonials>


        </>
    );
};

export default Home;