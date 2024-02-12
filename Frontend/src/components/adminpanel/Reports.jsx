import React from 'react';
import AddReport from '../modal/AddReport';
import Routing from './Routing';
import {CiSearch} from 'react-icons/ci'

function Reports() {
  return (
    <>
    <div className='d-flex justify-content-center m-4'>
    <Routing/>
    <div className="container ">
        <div className="row">
            <div className="col-md-8" >
                <h3>Reports</h3>
            </div>
            <div className="col-md-4 d-flex justify-content-around">
            <div>
              <input type="search" placeholder='search'/><CiSearch style={{marginLeft:"-30px"}} />
            </div>
            <div className=' d-flex '>
            <select name="" id="">
                <option value="">Sort by</option>
              </select>
              <div>
            <AddReport/>
            </div>
            </div>
        </div>
       </div> 
        <br/>
    <table class="table" style={{border:"3px solid black"}}>
  <thead>
    <tr>
      <th scope="col">NO.</th>
      <th scope="col">Name</th>
      <th scope="col">Purchased Form</th>
      <th scope="col">Purchase Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Paid by</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Printer</td>
      <td>Amazon</td>
      <td>03-feb-2023</td>
      <td>5,000.00</td>
      <td>Online</td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Scanner</td>
      <td>Flipcart</td>
      <td>02-feb-2023</td>
      <td>2500.00</td>
      <td>Online</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Mouse</td>
      <td>Local Vendor</td>
      <td>01-feb-2023</td>
      <td>550.00</td>
      <td>Online</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Tea Bill</td>
      <td>----</td>
      <td>31-jan-2023</td>
      <td>5000.00</td>
      <td>cash</td>
    </tr>
  </tbody>
</table>
  </div>
  </div>
  </>
  );
}

export default Reports;
