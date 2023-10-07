import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data=useLoaderData() //in loader distructure is not used
    console.log('booking data', data)
    return (
        <div>
            payment
        </div>
    );
};

export default Payment;