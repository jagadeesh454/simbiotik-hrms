import React, { useState } from 'react';
import Routing from './Routing';
// import { employees } from '../../utils/constants';
import img from '../../assets/employeeimage.png';
import AddEmployee from '../modal/AddEmployee';
import EmpCard from '../../EmpCard';
import { useEmployees } from '../../context/employeeContext';

function Employee() {
  let employees = useEmployees()
  console.log(employees);
  const [empid, setEmpID] = useState("")
  const [eusername, setEuserName] = useState("")
  const [isDisplayOpen, setIsDisplayOpen] = useState(false)
  let [cards, setCards] = useState(employees)
  const [details, setDetails] = useState("")

  function empIDhandler(e) {
    // console.log(e.target.value)
    setEmpID(e.target.value)
  }
  function enameHandler(e) {
    // console.log(e.target.value)
    setEuserName(e.target.value)
  }
  const searchHandler = () => {
    if (empid.length > 0) {
      const filteredEmployees = employees.filter(employee =>
        // console.log(employee.enum)
        (employee.employeeId).toString().includes(empid.toString())
      );
      //return filteredEmployees;
      console.log(filteredEmployees)
      setCards(filteredEmployees)
    }
    if (eusername.length) {
      const filteredEmployees = employees.filter(employee =>
        employee.fullName.toLowerCase().includes(eusername.toLowerCase())
      );
      //return filteredEmployees;
      console.log(filteredEmployees)
      setCards(filteredEmployees)
    }
  }
  function detailsHandler(em) {
    setIsDisplayOpen(!isDisplayOpen)
    setDetails(em)
  }
  const closeModal = () => {
    setIsDisplayOpen(false);
    setDetails({});
  }
  return (
    <>
      {isDisplayOpen ? <EmpCard details={details} closeModal={closeModal} /> : null}
      <h4 style={{ marginLeft: "15%" }}>Welcome to Simbiotik HRMS</h4>
      <div className='d-flex justify-content-between m-4'>
        <Routing />
        <br />
        <div className="container">
          <div className="heading d-flex justify-content-between" >
            <h4 style={{ textDecoration: "none" }}>Employee</h4>
            <AddEmployee />


          </div>
          <div className='d-flex justify-content-evenly'>
            <input type="text" placeholder='Employee ID' value={empid} onChange={empIDhandler} />
            <input type="text" placeholder='Employee Name' value={eusername} onChange={enameHandler} />
            <select name="" id="">
              <option value="">Select Designation</option>
            </select>
            <button className='btn btn-success' onClick={searchHandler}>Search</button>
          </div>
          <br />
          <div className="container">
            <div className="row">
              {cards?.map((em) => {
                return (
                  <div className="col-md-2 m-2" key={em.enum} onClick={() => detailsHandler(em)}>
                    <div className="card d-flex align-items-center">
                      <img src={img} alt="Emp not available" style={{ height: "120px", width: "90px", marginTop: "10px" }} />
                      <h6>{em.fullName}</h6>
                      <p>{em.employeeId}</p>
                    </div>
                  </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Employee;
