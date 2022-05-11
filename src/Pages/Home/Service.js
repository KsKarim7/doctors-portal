import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import ServiceCard from './ServiceCard';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = () => {
    return (
        <div className='mt-12'>
            <p className='text-primary font-bold text-1xl text-center'>OUR SERVICES</p>
            <h1 className="text-3xl mt-2 text-center">Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-8 mx-5'>

                <ServiceCard img={fluoride} cardTitle="Fluoride Treatment"  ></ServiceCard>
                <ServiceCard img={cavity} cardTitle="Cavity Filling"></ServiceCard>
                <ServiceCard img={whitening} cardTitle="Teeth Whitening"></ServiceCard>

            </div>
            <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='mx-10'>
                        <h1 className="text-4xl my-5 font-bold">Exception Dental Care, on your terms</h1>
                        <p className="my-5  mr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate adipisci alias odio cumque eius animi ad quisquam nesciunt voluptatibus unde eum dignissimos deleniti quas pariatur, saepe similique tenetur explicabo iusto aliquam. Dolorem dolorum natus aut cum tempore provident, dignissimos, error repellendus architecto maiores at dolore iure culpa impedit minima vero nisi perspiciatis! Recusandae voluptatum, vel architecto aperiam placeat laborum?</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                    <img className='max-w-sm rounded-xl shadow-2xl mx-10' src={treatment} />
                </div>
            </div>
        </div>
    );
};

export default Service;