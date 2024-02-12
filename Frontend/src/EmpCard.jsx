import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';



function EmpCard() {
  const navigate = useNavigate();
  const handleBackClick = () => {

    navigate('/dashboard');
  };
  return (
    <>
      <div className='d-flex justify-content-around'>
        <h1>
          Welcome to Simbiotik HRMS, <b style={{ color: "blue" }}>Samyuktha P T</b>
        </h1>
        <button className='btn btn-primary' onClick={handleBackClick}><IoMdArrowRoundBack />Back</button>
      </div>
      <div className="container d-flex">
        <div className="row">
          <div className="col-m-2">
            <div className="container">
              <div className="row">
                <div className="col-m-1">
                  <h6>Employee Details</h6>
                </div>
                <div className="row">
                  <div className="col-m-2">
                    <img src="" alt="" />
                    <h6>name:</h6>
                    <p>designation</p>
                  </div>
                  <div className="col-m-4">
                    <h6>Employee ID</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem error nesciunt ratione omnis veniam perferendis provident nostrum eius praesentium?</p>
                  </div>
                  <table className='table'>
                    <tr>
                      <td>email</td>
                      <td>address</td>
                    </tr>
                    <tr>
                      <td>contact</td>
                      <td>linkedIn</td>
                    </tr>
                  </table>
                </div>

              </div>
            </div>

          </div>
          <div className="col-m-3">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h5>Basic Details</h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>FullName:</p>
                  <p>Name</p>
                </div>
                <div className="col">
                  <p>Father Name:</p>
                  <p><b>Father Name</b></p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>DOB</p>
                  <p><b>Dob</b></p>
                </div>
                <div className="col">
                  <p>Mother Name:</p>
                  <p><b>Mother Name</b></p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Blood Group:</p>
                  <p><b>BGroup</b></p>
                </div>
                <div className="col">
                  <p>Personal Email:</p>
                  <p><b>email</b></p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Permanent Address:</p>
                  <p>address</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Work Experience</h5>
            </div>
            <div className="col-md-4">
              <h5>Salary Details</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Earnings</th>
                    <th scope="col">Amount Payable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Basic Pay</th>
                    <td>22000</td>

                  </tr>
                  <tr>
                    <th scope="row">HRA</th>
                    <td>2000</td>
                  </tr>
                  <tr>
                    <th scope="row">TDS</th>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">PF Deduction</th>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <th scope="row">Total</th>
                    <td>23000</td>
                  </tr>
                </tbody>
              </table>


            </div>
          </div>
        </div>



      </div>


    </>);
}

export default EmpCard;
