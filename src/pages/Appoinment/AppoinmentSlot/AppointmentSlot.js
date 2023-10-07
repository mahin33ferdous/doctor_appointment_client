
import React from 'react';

const AppointmentSlot = ({appointmentSlot,setSelectedSlot}) => {
    const{name,slots,price}=appointmentSlot
  
    const show=()=>{
        document.getElementById('my_modal_3').showModal()
       }

    
    return (
        <div className='mt-6 '>
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-center text-primary text-3xl font-bold">{name}</h2>
    <p>{slots?.length>0?slots[0]:"try another day"}</p>
    <p>{slots?.length} {slots?.length>1?'spaces':'space'} available</p> {/*need to add "?" or length will be undefined while changing route frpm /dashbord to /appointment*/}
    <p>price: ${price}</p>
    <div className="card-actions justify-center">
     
      <label className="btn btn-primary" onClick={()=>setSelectedSlot(appointmentSlot)} htmlFor="my_modal_6" >Book Appoinment</label>
      
      
    </div>
   
  </div>
</div>
        </div>
    );
};

export default AppointmentSlot;