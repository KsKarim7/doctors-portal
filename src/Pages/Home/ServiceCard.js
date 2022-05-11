import React from 'react';

const ServiceCard = ({ img, cardTitle }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl ml-10">

            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, rerum?</p>
            </div>
        </div>
    );
};

export default ServiceCard;