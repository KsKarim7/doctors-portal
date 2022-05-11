import React from 'react';


const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card card-side bg-base-100 shadow-xl   py-4 mx-3 px-4 ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>



    );
};

export default InfoCard;