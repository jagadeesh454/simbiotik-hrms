import React, {useState}from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Routing from './Routing';
import payroll from '../../utils/Payroll';
import EditPayroll from '../modal/EditPayroll';



function Payroll() {
  const [empid, setEmpID] = useState('');
  const [empname, setEmpName] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isEditModalVisible, setEditModalVisibility] = useState(false);



  const empIDhandler = (e) => {
    setEmpID(e.target.value);
    filterEmployees(e.target.value, empname);
  };

  const empNameHandler = (e) => {
    setEmpName(e.target.value);
    filterEmployees(empid, e.target.value);
  };

  const filterEmployees = (id, name) => {
    const filteredEmployees = payroll.filter(
      (employee) =>
        (employee.empId.toString().includes(id) || id === '') &&
        employee.ename.toLowerCase().includes(name.toLowerCase())
    );
    // console.log(filteredEmployees);
    setFilteredEmployees(filteredEmployees);
  };
  const editEmployee = (employee) => {
    setEditingEmployee(employee);
    setEditModalVisibility(true);
  };

  const handleUpdateAccess = (access) => {
    // Perform the update logic for the employee access
    console.log(`Update access for employee ${editingEmployee.empId} to ${access}`);
    // Close the modal
    setEditModalVisibility(false);
  };


  return (
    <>
    <div className='d-flex justify-content-center m-4'>
    <Routing/>
    <div className="container">
        <div className="row">
        <h5>Employee</h5>
            <div className="col-md-10" style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <input style={{borderRadius:"10px"}} type="text" placeholder='Employee ID' value={empid} onChange={empIDhandler}/>
                <input style={{borderRadius:"10px"}} type="text" placeholder='Employee Name'value={empname} onChange={empNameHandler} />
                <select style={{borderRadius:"10px"}} name="" id="">
                  <option value="">Select Comapany</option>
                  <option value="">Simbiotik Tech</option>
                  <option value="">Recstech</option>
                </select>
                <button className='btn btn-primary' onClick={() => filterEmployees(empid, empname)}>search</button>
            </div>
            <div className="col-md-2">
            <div><button className='btn btn-primary'>+ Add</button>
              </div>
            </div>
        </div>
        <br/>
    <table className="table" style={{border:"3px solid black", textAlign:"center"}}>
  <thead>
    <tr>
      <th scope="col">NO.</th>
      <th scope="col">Name</th>
      <th scope="col">Employee id</th>
      <th scope="col">Email</th>
      <th scope="col">Payslip</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {filteredEmployees.length > 0
                ? filteredEmployees.map((Pay) => (
                    <tr key={Pay.no}>
                      <td>{Pay.no}</td>
                      <td>{Pay.ename}</td>
                      <td>{Pay.empId}</td>
                      <td>{Pay.empEmail}</td>
                      <td>
                        <button className='btn btn-primary'>{Pay.ePay}</button>
                      </td>
                      <td>
                        <FaEdit onClick={() => editEmployee(Pay)} /> | <MdDelete />
                      </td>
                    </tr>
                  ))
                : payroll.map((Pay) => (
                    <tr key={Pay.no}>
                      <td>{Pay.no}</td>
                      <td>{Pay.ename}</td>
                      <td>{Pay.empId}</td>
                      <td>{Pay.empEmail}</td>
                      <td>
                        <button className='btn btn-primary'>{Pay.ePay}</button>
                      </td>
                      <td>
                        <FaEdit onClick={() => editEmployee(Pay)} /> | <MdDelete />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      {editingEmployee && (
  <EditPayroll
    handleUpdate={handleUpdateAccess}
    isVisible={isEditModalVisible}
    setVisibility={setEditModalVisibility}
  />
)}
    </>
  );
}

export default Payroll;
