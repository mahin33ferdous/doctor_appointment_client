import React, { useState } from 'react';
import appointment from '../../../img/appointment.png'
import b from '../../../img/banner.jpg'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {
   
    return (
       <header
    //    style={
    //     {
    //         backgroundImage:`url(${appointment})` 
    //     }
    // }
       >
                  <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={b} className="w-1/2 h-96 rounded-lg shadow-2xl" />
    {/* <div>
      <h1 className="text-white  text-5xl font-bold">Box Office News!</h1>
      <p className="text-white py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn  bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Get Started</button>
    </div> */}
    <div>
        <DayPicker
        mode='single'
        selected={selectedDate}
        onSelect={setSelectedDate}
        />
        
    </div>
  </div>
</div>
       </header>
    );
};

export default AppoinmentBanner;