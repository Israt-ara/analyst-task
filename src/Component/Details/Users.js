import React, { useState } from 'react';
import './Users.css'

const Users = ({ data }) => {

    const { company, name, address, email, phone } = data

    const [show, setShow] = useState(false)

    const handleViewDetails = () => {
        setShow(!show)
    }

    return (
        <div className='mt-16 '>

            <div className='flex flex-col lg:flex-row bg-white p-12 rounded-lg shadow-sm gap-4 justify-around items-center'>
                <h2 className='font-bold'>{company.name}</h2>
                <div>
                    <h2 className='font-bold'>Contact</h2>
                    <h2>{name}</h2>
                </div>
                <div>
                    <h2 className='font-bold'>City</h2>
                    <h2>{address.city}</h2>
                </div>
                <div>
                    <h2 className='font-bold'>Street</h2>
                    <h2>{address.street}</h2>
                </div>
                <div>
                    <button className='btn button-design' onClick={handleViewDetails}>{show ? "Hide Details" : "View Details"}</button>
                </div>
            </div>
            {
                show && <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4  border border-solid rounded-2xl m-10 p-10'>
                    <div className='container mx-auto text-center'>
                        <h2 className='text-xl font-bold mb-3 text-center'>Description</h2>
                        <h2>{company.catchPhrase}</h2>
                    </div>
                    <div className='text-left mt-6'>
                        <h2 className='text-xl font-bold mb-3 text-center'>Contact </h2>
                        <div className='flex flex-col lg:flex-row gap-10 justify-around'>
                            <div>
                                <h2><span className='font-bold'>Name</span>: {name}</h2>
                                <h2><span className='font-bold'>Email</span> : {email}</h2>
                                <h2><span className='font-bold'>Phone</span> : {phone}</h2>
                            </div>
                            <div>
                                <h2><span className='font-bold'>Address</span>: {address.city}</h2>
                                <h2><span className='font-bold'>Street</span>: {address.street}</h2>
                                <h2><span className='font-bold'>Zip Code</span>: {address.zipcode}</h2>
                            </div>
                            <div>
                                <h2><span className='font-bold'>City</span>: {address.city}</h2>
                                <h2><span className='font-bold'>Lat</span>: {address.geo.lat}</h2>
                                <h2><span className='font-bold'>Lng</span>: {address.geo.lng}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Users;