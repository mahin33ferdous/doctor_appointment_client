import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const AppoinmentModel = ({selectedSlot,setSelectedSlot,selectedDate,refetch}) => {
    const{name:treatmentName,slots}=selectedSlot
    const date=format(selectedDate, 'PP')
    const{user}=useContext(AuthContext)
     const handleBooking=e=>{
      e.preventDefault();
      const form=e.target;
      const slot=form.slot.value;
      const name=form.name.value;
      const email=form.email.value;
      const phone=form.phone.value;

      const booking={
        appointmentDate:date,
        treatment : treatmentName,
        patient : name,
        slot,
        email,
        phone
      }
      console.log(booking)

      fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
        if(data.acknowledged){
           
            setSelectedSlot(null)
            toast.success('booking confirmed')
            refetch()
        }
        else{
          toast.error(data.message)
        }
})
    .catch(err=>console.error(err))
}
     
    return (
        <div>
  <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
 
  <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
 
    <h3 className="font-bold text-lg">{treatmentName}</h3>
    <p className="py-4">Book your appoinment!</p>
    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3"> 
    <input type="text" name='date' placeholder="" value={date} className="input input-bordered w-full max-w-xs font-bold" />  
    <select name='slot'  className="select select-bordered w-full max-w-xs font-bold">
      {
        slots.map(slot=><option  value={slot} className=''>{slot}</option>)
        
      }
  
  </select>
       
      <input type="text" name='pname' placeholder="Name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs font-bold" />
      <input type="text" name='phone' placeholder="Phone Number"  className="input input-bordered w-full max-w-xs" />
      <input type="email" name='email' placeholder="email"  defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs font-bold" />
      <br/>
       <input  type="submit" value="submit" className='btn btn-primary w-full max-w-xs'/> 
      </form> 
      <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
    </div>
    
  </div>

        </div>
    );
};

export default AppoinmentModel;