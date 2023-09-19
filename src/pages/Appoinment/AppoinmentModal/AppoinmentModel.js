import { format } from 'date-fns';
import React from 'react';

const AppoinmentModel = ({selectedSlot,selectedDate}) => {
    const{name,slots}=selectedSlot
    const date=format(selectedDate, 'PP')
    
    return (
        <>
  <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
 
  <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
 
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">Book your appoinment!</p>
    <from className="grid grid-cols-1 gap-3"> 
    <input type="text" placeholder="" value={date} className="input input-bordered w-full max-w-xs font-bold" />  
    <select className="select select-bordered w-full max-w-xs font-bold">
      {
        slots.map(slot=><option value={slot} className=''>{slot}</option>)
        
      }
  
  </select>
      <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs " />
      <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" />
      <br/>
       <input type="submit" value="submit" className='btn btn-primary w-full max-w-xs'/> 
      </from> 
      <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
    </div>
    
  </div>

        </>
    );
};

export default AppoinmentModel;