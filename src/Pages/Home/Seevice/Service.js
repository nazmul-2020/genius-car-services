import React from 'react';

const Service = ({ service }) => {

    const { name, img, price, description } = service

    return (
        <div>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <small>Price : {price}</small>
        </div>
    );
};

export default Service;