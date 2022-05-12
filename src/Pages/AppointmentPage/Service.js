import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary flex justify-center">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>No Slot Available for Today</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center my-3">
                    <label for="booking-modal-6"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="uppercase btn btn-secondary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;