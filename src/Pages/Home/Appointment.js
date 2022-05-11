import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Appointment = () => {
    const reviews = [
        {
            _id: 1,
        }
    ]
    return (
        <div style={
            { background: `url(${appointment})` }
        } className="flex justify-center items-center">
            <div className="flex-1 hidden lg:block">
                <img className=' mt-[-125px]' src={doctor} />
            </div>
            <div className='flex-1'  >
                <p className='text-primary font-bold text-1xl'>Appontment</p>
                <h1 className="text-4xl my-5 text-lime-50 font-bold">Make and appointment today</h1>
                <p className="my-5 mr-5 text-lime-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore saepe rerum deleniti assumenda molestias voluptate cumque animi? Labore numquam voluptatum explicabo voluptas porro deserunt vel suscipit pariatur ipsum eaque, architecto sapiente consectetur? Recusandae a fuga esse repudiandae dolorum! Alias libero inventore aliquid dolores quidem dolorum, dolor rerum consequatur ratione.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>

        </div>
    );
};

export default Appointment;