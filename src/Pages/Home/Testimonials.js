import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonials = () => {
    return (
        <section className='px-12 my-20'>
            <div className='flex justify-between'>
                <div >
                    <h4 className=" py-5 text-xl text-primary font-bold">Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div className='w-24 lg:w-48'> <img src={quote} alt="" /></div>
            </div>
            <div>

            </div>

        </section>
    );
};

export default Testimonials;