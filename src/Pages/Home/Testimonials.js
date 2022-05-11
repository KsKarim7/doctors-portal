import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Henrey',
            home: 'California',
            reviews: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere accusamus inventore beatae voluptate quod repellendus odit, fugit eum nihil, in quas eos eveniet saepe sapiente? Ab vel dolorum quasi?",
            img: people1
        },
        {
            _id: 2,
            name: 'Bilson Henrey',
            home: 'California',
            reviews: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere accusamus inventore beatae voluptate quod repellendus odit, fugit eum nihil, in quas eos eveniet saepe sapiente? Ab vel dolorum quasi?",
            img: people2
        },
        {
            _id: 3,
            name: 'Kilson Henrey',
            home: 'California',
            reviews: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere accusamus inventore beatae voluptate quod repellendus odit, fugit eum nihil, in quas eos eveniet saepe sapiente? Ab vel dolorum quasi?",
            img: people3
        }
    ]
    return (
        <section className='px-12 my-20'>
            <div className='flex justify-between'>
                <div >
                    <h4 className=" py-5 text-xl text-primary font-bold">Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div className='w-24 lg:w-48'> <img src={quote} alt="" /></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    >

                    </ReviewCard>)
                }
            </div>

        </section>
    );
};

export default Testimonials;