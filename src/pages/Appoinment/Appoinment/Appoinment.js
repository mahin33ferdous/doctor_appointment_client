import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AppoinmentSlots from '../AppoinmentSlot/AppoinmentSlots';




const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date)
    return (
        <div>
            <AppoinmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppoinmentBanner>
         <AppoinmentSlots
           selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}
         ></AppoinmentSlots>
         
        </div>
    );
};

export default Appoinment;