import React from 'react';
import { useQuery } from 'react-query';

const AllUser = () => {
    const {data:users=[]}= useQuery({
        querykey:['users'],
        queryFn: async()=>{
            const res=await fetch(`http://localhost:5000/users`);
            const data= await res.json()
           
            //console.log(data)
            return data
           
        }
    });

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
        <th><button className='btn btn-xs btn-primary'>Make Admin</button></th>
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