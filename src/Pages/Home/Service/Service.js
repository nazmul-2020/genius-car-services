import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, img, price, description } = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <p>price: {price}</p>
            <p><small>description : {description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)}>Book : {name}</button>
        </div>
    );
};

export default Service;