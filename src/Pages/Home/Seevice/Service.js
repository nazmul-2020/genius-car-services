import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, img, price, description } = service

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <p>price: {price}</p>
            <p><small>description : {description}</small></p>
            <button>Book : {name}</button>
        </div>
    );
};

export default Service;