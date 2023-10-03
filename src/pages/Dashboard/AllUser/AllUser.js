import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUser = () => {
    const {data:users=[],refetch}= useQuery({
        querykey:['users'],
        queryFn: async()=>{
            const res=await fetch(`http://localhost:5000/users`);
            const data= await res.json()

           
            //console.log(data)
            return data
           
        }
    });
// updating admin role to user
    const handleMakeAdmin=(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers:{
                authorization :`bearer ${localStorage.getItem('accessToken')}`//sendng access token to server side
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0)
            {
                toast.success("Admin created successfully")
                refetch()
            }
        })
           
            
    }

    return (
        <div>
            <h3>user</h3>
            <div className="overflow-x-auto mt-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        users.map((user,i)=><tr className='hover' key={user._id}>
        <th>{i}</th>
        <th>{user.name}</th>
        <th>{user.email}</th>
        <th>{user?.role !=='admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</th>
        <th><button className='btn btn-xs btn-danger'>Delete</button></th>
        

      </tr>
        
        )
      }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUser;