import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs';
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
            <ContactUs></ContactUs>
            <Footer></Footer>


        </>
    );
};

export default Home;