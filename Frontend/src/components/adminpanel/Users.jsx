import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddEmployee from '../modal/AddEmployee';
import Routing from './Routing';
import { CiSearch } from 'react-icons/ci'
import { users } from '../../utils/constants';
import EditAdmin from '../modal/EditAdmin';

function Users() {
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isEditModalVisible, setEditModalVisibility] = useState(false);

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
      <div className='d-flex justify-contentcenter m-3'>

        <Routing />


        <div className="container">

          <h2>users</h2>
          <div className=' d-flex justify-content-end'>
            <input type="text" placeholder='Enter employee' /><CiSearch style={{ marginLeft: "-30px" }} /> <br />
            <div>
              <AddEmployee />
            </div>
          </div>

          <br />
          <hr />
          <table className="table" style={{ border: "3px solid black" }}>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Access</th>
                <th scope="col">Created date</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((emp, ind) => {
                return (
                  <tr key={ind}>
                    <td>{emp.no}</td>
                    <td>{emp.name}</td>
                    <td style={{ backgroundColor: emp.access === "Employee" ? "grey" : "blue", color: "white", borderRadius: "20px" }}>{emp.access}</td>
                    <td>{emp.cdate}</td>
                    <td>{emp.role}</td>
                    <td><FaEdit onClick={() => editEmployee(emp)} /> | <MdDelete /></td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
      {editingEmployee && (
        <EditAdmin
          handleUpdate={handleUpdateAccess}
          isVisible={isEditModalVisible}
          setVisibility={setEditModalVisibility}
        />
      )}
    </>
  );
}

export default Users;
