import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentSlot from './AppointmentSlot';
import AppoinmentModel from '../AppoinmentModal/AppoinmentModel';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
const AppoinmentSlots = ({selectedDate,setSelectedDate}) => {
    // const [appoinmentSlots,setAppointmentSlots]=useState([])
    const [selectedSlot,setSelectedSlot]=useState(null)
    const date=format(selectedDate, 'PP')
   // console.log(selectedSlot)
// fetching data using react query method 1
// refetch is used to update query instantly 
    const {data:appoinmentSlots=[],refetch}= useQuery({
        querykey:['appointmentSlots',date],
        queryFn: async()=>{
            const res=await fetch(`http://localhost:5000/appointment?date=${date}`);
            const data= await res.json()
            //console.log(data)
            return data
           
        }
    });
// fetching data using useEffect method 2

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointment')
    //     .then(res=>res.json())
    //     .then(data=>setAppointmentSlots(data))
    // },[])

    // if(isLoading)
    // {
    //     return<Loading></Loading>
    // }
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
                    setSelectedSlot={setSelectedSlot}
                    selectedDate={selectedDate}
                    refetch={refetch}
                    
                    ></AppoinmentModel>
                }
       
             </div>
        </section>
    );
};

export default AppoinmentSlots;