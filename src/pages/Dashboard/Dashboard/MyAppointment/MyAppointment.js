import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
;

const MyAppointment = () => {
    const {user}=useContext(AuthContext)

     const uri=`http://localhost:5000/bookings?email=${user?.email}`
    // const { data} = useQuery(['bookings', user?.email],async () => {
    //     const res = await fetch(uri)
    //     const data=res.json();
    //     return data
    //   })
    const {data: bookings=[]}= useQuery({
        querykey:['bookings', user?.email],
        queryFn: async()=>{
            const res=await fetch(uri,{

            headers:{
                authorization :`bearer ${localStorage.getItem('accessToken')}`//sendng access token to server side
            }

           });
            const data= await res.json()
            //console.log(bookings)
            return data
           
        }
    });

      //console.log(data)
    return (
        <div>
            <h3>My Appoinment</h3>
            <div className="overflow-x-auto mt-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        bookings.map((booking,i)=><tr className='hover' key={booking._id}>
        <th>{i}</th>
        <th>{booking.email}</th>
        <th>{booking.treatment}</th>
        <th>{booking.appointmentDate}</th>
        <th>{booking.slot}</th>
        <th>
           {
            booking.price && !booking.paid && <Link to={`payment/${booking._id}`}>
            <button className='btn btn-primary btn-sm'>pay</button>
            </Link>
           }
           {
           booking.price && booking.paid && <span className='text-primary'>paid</span>
           }
            
            </th>
      </tr>
        
        )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;