import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/simbiotick logo.png'
import { FaHome,FaUsers,FaEdit,FaUser, FaCalendar,FaPaypal  } from "react-icons/fa";
import { FaSquarePollHorizontal } from "react-icons/fa6";
function Routing() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={logo} alt="Not available" style={{height:"70px"}} />
            </div>
        </div>
         <Link  to="/dashboard" style={{textDecoration:"none",color:"black"}}><FaHome /> Dashboard </Link> <br />
         <Link to="/users" style={{textDecoration:"none",color:"black"}}><FaUsers />Users</Link> <br />
         <Link to="/leavereq" style={{textDecoration:"none",color:"black"}}><FaEdit />Leaves</Link> <br />
         <Link to="/employee" style={{textDecoration:"none",color:"black"}}><FaUser />Employee</Link> <br />
         <Link to="/holiday" style={{textDecoration:"none",color:"black"}}><FaCalendar />Holidays</Link> <br />
         <Link to="/payroll" style={{textDecoration:"none",color:"black"}}><FaPaypal />Payroll</Link> <br />
         <Link to="/report" style={{textDecoration:"none",color:"black"}}><FaSquarePollHorizontal />Reports</Link> <br />
       
      
    </div>
    </div>
  );
}

export default Routing;