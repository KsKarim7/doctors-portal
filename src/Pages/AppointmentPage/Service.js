import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary flex justify-center">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>No Slot Available for Today</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center my-3">
                    <label htmlFor="booking-modal-6"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="uppercase btn btn-secondary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;