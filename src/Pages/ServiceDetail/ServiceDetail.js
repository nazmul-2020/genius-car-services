import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const {serviceId}=useParams();

    return (
        <div className='text-center'>
            <h2 >We come to Our ServiceDetail: {serviceId} </h2>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed CheckOut</button>
                </Link>
        </div>
    );
};

export default ServiceDetail;