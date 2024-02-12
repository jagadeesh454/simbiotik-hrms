import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Routing from './Routing';
import { employees } from '../../utils/constants';
import LeaveStatus from '../modal/LeaveStatus';
import ApplyLeave from '../modal/ApplyLeave';


function Leaves() {
const [isShowPopup,setShowPopup]=useState(false);
const [selectedEmployee, setSelectedEmployee] = useState(null);

  const leaveHandler = (employee) => {
    setSelectedEmployee(employee);
    setShowPopup(true);
    
  }
  return (
    <>
      <div className='d-flex justify-content-center m-4'>
            <Routing />
            {isShowPopup && <LeaveStatus leaveInfo={selectedEmployee} />}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Leaves</h2>
            </div>
            <div className="col-md-6 d-flex justify-content-evenly">
              <div>
                <select name="" id="">
                  <option value="">Month</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="">Year</option>
                </select>
              </div>
              <div>
                <ApplyLeave/>
              </div>

              
            </div>
          </div >
          <br />
          <table className="table text-center" style={{ border: "3px solid black" }}>
            <thead>
              <tr>
                <th scope="col">Applied By</th>
                <th scope="col">Applied on</th>
                <th scope="col">From Date</th>
                <th scope="col">To Date</th>
                <th scope="col">Type</th>
                <th scope="col">Reason</th>
                <th scope="col">Leaves Left</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((empl) => {
                return (
                  <tr key={empl.enum}onClick={() => leaveHandler(empl)} >
                    <td >{empl.ename}</td>
                    <td>{empl.leave.appliedOn}</td>
                    <td>{empl.leave.from}</td>
                    <td>{empl.leave.to}</td>
                    <td>{empl.leave.type}</td>
                    <td>{empl.leave.reason}</td>
                    <td>{empl.leave.bal}</td>
                    <td><FaEdit /> | <MdDelete /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div >
      </div>
    </>
  );
}

export default Leaves;
