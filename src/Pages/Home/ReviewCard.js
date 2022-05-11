import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl px-12">
            <div className="card-body">
                <p>{review.reviews}</p>
                <div className='flex'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div className='mt-6 ml-5'>
                        <p className='text-xl'>{review.name}</p>
                        <p>{review.home}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;