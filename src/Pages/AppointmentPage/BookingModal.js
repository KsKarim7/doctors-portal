import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        // console.log(_id, name, slot)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // to close the modal 
                // console.log(data)
                if (data.success) {
                    toast(`Your appointment has been set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an  appointment, ${data.booking?.date} at ${data.booking?.slot}`)

                }
                refetch();
                setTreatment(null)

            })


    }
    return (
        <div style={{ 'overflow-y': 'hidden' }}>
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center my-4 text-lg text-secondary">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center' action="">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        {/* <h5>{format(date, 'PP')}</h5> */}
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                > {slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled
                            value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || ''} name='email' className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;