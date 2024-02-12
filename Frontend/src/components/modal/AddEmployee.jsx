import React, { useEffect, useState } from 'react';

function AddEmployee() {
  const [employeeData, setEmployeeData] = useState({
    employeeId: "",
    fullName: "",
    department: "",
    designation: "",
    address: "",
    emailId: "",
    doj: "",
    emptype: ""
  })
  const [submit, setSubmit] = useState(false)
  const changeHandler = (e) => {
    // console.log(e.target.value)
    setEmployeeData((pre) => {
      return { ...pre, [e.target.name]: e.target.value }
    })
  }
  const handleSubmit = () => {
    console.log(employeeData);
    const { employeeId, fullName, department, emailId, designation, doj, emptype } = employeeData
    if (employeeId && fullName && department && emailId && designation && doj && emptype) {
      console.log(employeeData)
      setSubmit(true)
    }
    else {
      alert("provide all the fields")
    }
  }
  useEffect(() => {
    if (submit) {
      fetch("http://localhost:3001/api/v1/employees", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(employeeData)
      }).then(data => data.json)
        .then(item => alert("employee created"))
        .catch(err => console.log(err))
    }
  }, [submit])
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">+ADD</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Employee</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className='mb-2' style={{ height: " 100%", width: "100%" }}>
                  <select name="department" id="department" className='form-control' placeholder="Department" onChange={(e) => changeHandler(e)}>
                    <option value="">Select Department</option>
                    <option value="Developer">Developer</option>
                    <option value="Tester">Tester</option>
                    <option value="DevOps">DevOps</option>
                    <option value="HR">HR</option>
                  </select>

                </div>
                <div className='mb-2' style={{ height: " 100%", width: "100%" }}>
                  <select name="emptype" id="emptype" className='form-control' placeholder="Employee Type" onChange={(e) => changeHandler(e)}>
                    <option value="">Select Employee Type</option>
                    <option value="FreeLancer">FreeLancer</option>
                    <option value="Intern">Intern</option>
                    <option value="Permanent">Permanent</option>
                  </select>

                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='EmployeeID' name='employeeId' onChange={(e) => changeHandler(e)} />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Name' name='fullName' onChange={(e) => changeHandler(e)} />
                </div>
                <div className="mb-2">
                  <input type="email" className="form-control" placeholder='Email' name="emailId" onChange={(e) => changeHandler(e)} />
                </div>

                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='DESIGNATION' name='designation' onChange={(e) => changeHandler(e)} />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='ENTER ADDRESS' name="address" onChange={(e) => changeHandler(e)} />
                </div>
                <div className="mb-2">
                  <input type="date" className="form-control" placeholder='Joining Date' name="doj"
                    onChange={(e) => changeHandler(e)} />
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
