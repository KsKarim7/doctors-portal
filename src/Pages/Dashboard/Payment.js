import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0pX9IZAkhVFhSpFcmajWGxxuFWzrGju6XBLVFK5mnrCuyt8agfUfM2HLYEmHjd0JOVTbGK7SOJMRoWFk1DKUUO00UpTGgMLV');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card bg-base-100 w-50 max-w-md shadow-xl my-12">
                <div class="card-body">
                    <p className='font-bold'>Hello, <span className='text-success'>{appointment.patientName}</span> </p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-secondary'>{appointment.date}</span> at <span className='text-secondary'>{appointment.date}</span> </p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;