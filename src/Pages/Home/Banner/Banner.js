import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12 bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-xl rounded-xl shadow-2xl' src={chair} />
                <div>
                    <h1 className="text-4xl my-5 font-bold">Your New Smile Starts Here</h1>
                    <p className="my-5 mr-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;