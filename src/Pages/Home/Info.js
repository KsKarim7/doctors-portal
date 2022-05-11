import React from 'react';
import InfoCard from './InfoCard';
import icon1 from '../../assets/icons/clock.svg'
import icon2 from '../../assets/icons/marker.svg'
import icon3 from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-8 mx-5'>

            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle='Opening Hours' img={icon1}></InfoCard>
            <InfoCard bgClass="bg-accent" cardTitle='Our Locations' img={icon2}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle='Contact Us bgClass=""' img={icon3}></InfoCard>
        </div>
    );
};

export default Info;