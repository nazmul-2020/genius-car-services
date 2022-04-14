import React, { useEffect, useState } from 'react';
import Service from '../Seevice/Service';

// const services=[
//     {id:1, name: 'oil change', price:100, description:'',img:'https://i.ibb.co/k2cQkwh/muscular-car-service-worker-repairing-vehicle-1.png'},
//     {id:1, name: 'oil change', price:100, description:'',img:'https://i.ibb.co/k2cQkwh/muscular-car-service-worker-repairing-vehicle-1.png'},
//     {id:1, name: 'oil change', price:100, description:'',img:'https://i.ibb.co/k2cQkwh/muscular-car-service-worker-repairing-vehicle-1.png'}
// ]

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2>Services: {services.length}</h2>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;