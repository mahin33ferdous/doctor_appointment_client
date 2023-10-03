import React from 'react';
import Header from '../../Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const DashboardLyout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {<Outlet></Outlet>}
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to='/dashboard'>My Appointment</Link></li>
      <li><Link to='/dashboard/allusers'>All Users</Link></li>
    </ul>
  
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLyout;