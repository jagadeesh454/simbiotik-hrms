import React from 'react';
import Routing from './Routing';
// import { employees } from '../../utils/constants'
import { useNavigate } from 'react-router-dom';
import { useEmployees } from '../../context/employeeContext';
function Dashboard() {
    const employees = useEmployees()
    console.log(employees);
    const navigate = useNavigate()
    function logoutHandler() {
        navigate("/")
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Routing />
                    </div>
                    <div className="col-md-10" style={{ border: "1px solid black" }}>
                        <div className=" d-flex justify-content-between">
                            <h2>Welcome to Simbiotick HRMS</h2>

                            <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
                        </div>
                        <br />
                        <div className="row d-flex justify-content-evenly align-items-">
                            <div className="col-md-3" style={{ border: "1px solid black" }}>
                                <h6>Total Employees section</h6>
                                <img src="https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/donut-chart-example.svg" alt="DonutChart" className='img-fluid' />
                            </div>
                            <div className="col-md-5 m-1" style={{ border: "1px solid black" }}>
                                Leave Requests
                                <br />
                                <div className="row" style={{ border: "1px solid black", }}>
                                    <div className="col">Name</div>
                                    <div className="col">Reason</div>
                                    <div className="col">Leave Bal</div>
                                    <div className="col"><button className='btn btn-primary'>View</button></div>
                                </div>
                                <br />
                                <div className="row" style={{ border: "1px solid black", }}>
                                    <div className="col">Name</div>
                                    <div className="col">Reason</div>
                                    <div className="col">Leave Bal</div>
                                    <div className="col"><button className='btn btn-primary'>View</button></div>
                                </div>
                                <br />
                                <button className='btn btn-primary'>View All</button>
                            </div>
                            <div className="col-md-2">
                                <div className="container">
                                    <div className="row" >
                                        <div className="col" style={{ border: "1px solid black" }}>Attendance</div>
                                        <div className="col" style={{ border: "1px solid black" }}>Absent</div>
                                        <div className="col" style={{ border: "1px solid black" }}>Request</div>
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col">
                                        Employee Name <button className='btn btn-primary' style={{ border: "1px solid black" }}>Wish Them</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="container">
                            <div className="row">
                                <h3>Employees List</h3>
                                <div className="col-md-10 d-flex justify-content-center" style={{ border: "1px solid black", }}>
                                    <table className="table text-center">
                                        <thead className='text-center'>
                                            <tr className='text-center'>
                                                <th>No.</th>
                                                <th>Employee Name</th>
                                                <th>Employee Type</th>
                                                <th>Email</th>
                                                <th>Department</th>
                                                <th>Designation</th>
                                                <th>Joining Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {employees?.map((emp, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{emp?.employeeId}</td>
                                                        <td>{emp?.fullName}</td>
                                                        <td>{emp?.emptype}</td>
                                                        <td>{emp?.emailId}</td>
                                                        <td>{emp?.department}</td>
                                                        <td>{emp?.designation}</td>
                                                        <td>{emp?.doj}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Dashboard;
