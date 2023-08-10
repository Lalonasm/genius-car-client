import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
const [services,setServices]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])

    return (
        <div>

         <div className='text-centerb mb-4'>
            <p className='font-bold text-2xl text-orange-600 align-center '>Service</p>
            <h2 className='text-5xl font-semibold '>Our Service Area</h2>
            <p className='text-xl text-black-200'>The majority have suffered alteration in some form , by injected humour or Randomised <br/> words When don't look Even Slightly Believable.</p>
         </div>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
         </div>
      
        </div>
    );
};

export default Services;