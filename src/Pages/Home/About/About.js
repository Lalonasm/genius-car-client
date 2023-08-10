import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img src={person} className="rounded-lg w-4/5 h-full shadow-2xl" alt='' />
         <img src={parts} className="absolute rounded-lg w-3/5 right-5 top-1/2 border-8 shadow-2xl" alt='' />
         </div>
          <div className='w-1/2'>
            <p className=' text-2xl font-bold text-orange-600'>About Us</p>
            <h1 className="my-5 text-5xl font-bold">We are qualified <br/> & of experience <br/> in this field</h1>
            <p className="py-6">There are many variations of passage $ we provide raliable service .In deleniti eaque aut repudiandae et a id nisi.</p>
            <p className="py-6">There are many variations of passage $ we provide raliable service .In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;