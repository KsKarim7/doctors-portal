import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={
            { background: `url(${appointment})` }
        } className="flex justify-center items-center">
            <div className=''>
                <p className='text-xl text-primary text-center my-5'> Contact Us</p>
                <p className='text-4xl text-lime-50 mt-3 mb-8'>Stay connected with us</p>

                <div className="form-control ml-5">
                    <label className="input-group input-group-lg">
                        <span>Email</span>
                        <input type="text" placeholder="typehere@gamil.com" className="input input-bordered input-lg" />
                    </label>
                </div>
                <div className="form-control ml-5 my-4">
                    <label className="input-group input-group-lg">
                        <span>Subject</span>
                        <input type="text" placeholder="" className="input input-bordered input-lg" />
                    </label>
                </div>
                <textarea className="textarea h-24 w-80 ml-5 textarea-bordered" placeholder="Bio"></textarea>
                <br />
                <div className='text-center my-4'>
                    <PrimaryButton >Submit</PrimaryButton>
                </div>
            </div>


        </div>
    );
};

export default ContactUs;