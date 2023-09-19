import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentSlot from './AppointmentSlot';
import AppoinmentModel from '../AppoinmentModal/AppoinmentModel';
const AppoinmentSlots = ({selectedDate,setSelectedDate}) => {
    const [appoinmentSlots,setAppointmentSlots]=useState([])
    const [selectedSlot,setSelectedSlot]=useState(null)
    console.log(selectedSlot)

    useEffect(()=>{
        fetch('appoinmentSolt.json')
        .then(res=>res.json())
        .then(data=>setAppointmentSlots(data))
    },[])
    return (
        <section className='mt-6'>
             <p className='text-center text-primary font-bold'>You picked {format(selectedDate, 'PP')}</p>
             <div className='grid gap-6 lg:grid-cols-3 grid md:grid-cols-2 grid grid-cols-1 place-items-center '>
                {
                     appoinmentSlots.map(appointmentSlot=><AppointmentSlot
                     key={appointmentSlot._id}
                     appointmentSlot={appointmentSlot}
                     setSelectedSlot={setSelectedSlot}
                     ></AppointmentSlot>)
                }
             </div>
             <div>
                {
                    selectedSlot &&
                    <AppoinmentModel
                    selectedSlot={selectedSlot}
                    selectedDate={selectedDate}
                    
                    ></AppoinmentModel>
                }
       
             </div>
        </section>
    );
};

export default AppoinmentSlots;