import React from 'react';
import Routing from './Routing';

function EmpRegisterForm() {
  return (
    <div>
        <h2>Welcome to Simbiotik HRMS, //Employee Name</h2>
        <Routing/>
      <form action="">
        <h4>
            Add Employee
        </h4>
            <br />
            <div>
                <table><tbody>
                    <tr>
                        <td rowSpan="2"><input type='file' name="" id="" style={{width:"75px", height:"75px"}} /></td>
                        <td><input type="text" placeholder='Name' /></td>
                        <td><input type="text" placeholder='Department' /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Employee ID' /> </td>
                        <td><input type="text" placeholder='Designation'/></td>
                    </tr> </tbody>           
            </table>
            </div>
            <h4>
            Address
        </h4>
            <br />
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td><legend>Address</legend>
                            <input type='text' name="" placeholder='Address1'/></td>
                        <td><legend>Address 2</legend>
                            <input type="text" placeholder='Address2' /></td>
                        <td><legend>Address3</legend>
                            <input type="text" placeholder='Address3' /></td>
                    </tr>
                    <tr>
                        <td><legend>Address4</legend>
                            <input type="text" placeholder='Address4' /> </td>
                    </tr>        
                    <tr>
                        <td><legend>City</legend>
                        <input type="text" placeholder='City' /></td>
                        <td><legend>State</legend>
                        <input type="text" placeholder='State' /></td>
                        <td><legend>Country</legend>
                        <input type="text" placeholder='Country' /></td>
                    </tr>
                    <div>
                        <h4>Education</h4>
                        <br />
                        <tr>
                            <td><legend>Education 1</legend>
                            <input type="text" placeholder='Education 1' /></td>
                            <td><legend>Education 2</legend>
                            <input type="text" placeholder='Education 2' /></td>
                            <td><legend>Education 3</legend>
                            <input type="text" placeholder='Education 3' /></td>
                            </tr>
                    </div>
                    <div>
                        <h4>Work Experience</h4>
                        <tr>
                            <td><legend>Work Experience 1</legend>
                            <input type="text" placeholder='Work Experience 1' /></td>
                            <td><legend>Work Experience 2</legend>
                            <input type="text" placeholder='Work Experience 2' /></td>
                            <td><legend>Work Experience 3</legend>
                            <input type="text" placeholder='Work Experience 3' /></td>
                        </tr>                        
                    </div>    
                    <div>
                        <h4>Bank Details</h4>
                        <br />
                        <tr>
                          
                            
                            <td>
                                {/* <legend>Bank Name</legend> */}
                           <select name="" id="">
                            <option value="">Bank Name</option></select></td>
                            <td>
                                {/* <legend>Account Holder Name</legend> */}
                            <input type="text" placeholder='Account Holder Name' /></td>
                            <fieldset><legend>Account Number</legend><tr>
                            <td><input type="text" placeholder='Account Number' /></td>
                            </tr>
                            </fieldset>
                        </tr>  
                        <tr>
                            <td>
                                <input type="text" placeholder='IFSC Code'/>
                            </td>
                            <td>
                                <input type="text" placeholder='Branch Name' />
                            </td>
                        </tr>
                    </div>
                    <div>
                        <h4>Salary Details</h4>
                        <br />
                        <tr>
                            <td>
                                <input type="text" placeholder='Salary Details 1' />
                            </td>
                            <td>
                                <input type="text" placeholder='salary Details 2' />
                            </td>
                            <td>
                                <input type="text" placeholder='Salary Details 3' />
                            </td>
                        </tr>
                    </div>
                    </tbody>
            </table>
            </div>
      </form>
    </div>
  );
}

export default EmpRegisterForm;
<form action="">

</form>