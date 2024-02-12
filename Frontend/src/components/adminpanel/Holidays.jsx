import React from 'react';
import AddHoliday from '../modal/AddHoliday';
import Routing from './Routing';
import holidays from '../../utils/Holidays.js'

function Holidays() {
  return (
    <>
      <div className='d-flex justify-content-center m-4'>
        <Routing />
        <div className="container">
          <div className="row">
            <div className="col-md-1" >
              <h5>Simbiotik Holidays</h5>
            </div>
            <div className="col-md-5">
              <h4 style={{ color: "blue" }}>  Recstech Holidays</h4>
            </div>
            <div className="col-md-6 d-flex justify-content-evenly">
              <div style={{ display: "flex", justifyItems: 'self-end', columnGap: "100px" }}>
                <select name="" id="">
                  <option value="">2023</option>
                </select>
                <AddHoliday />
              </div>
            </div>
            <hr />
            <br />
            <table className="table" style={{ border: "3px solid black",textAlign:"center" }}>
              <thead>
                <tr>
                  <th scope="col">NO.</th>
                  <th scope="col">Declared Holiday</th>
                  <th scope="col">Holiday Date</th>
                  <th scope="col">Day</th>
                  <th scope="col">Day</th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((data) => {
                  return (
                    <tr>
                      <td>{data.no}</td>
                      <td>{data.decHoliday}</td>
                      <td>{data.hDate}</td>
                      <td>{data.hDay}</td>
                      <td>{data.wDay}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}

export default Holidays;
