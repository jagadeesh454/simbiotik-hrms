import React from 'react';

function ApplyLeave() {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                + Apply Leave
            </button>



            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{ alignContent: "center" }}>Add Holiday</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ textAlign: "center" }}>
                            <select name="" id="" className='form-control'>
                                <option value="">Select Leave Type</option>
                                <option value="">Casual Leave</option>
                                <option value="">Sick Leave</option>
                                <option value="">Privilage Leave</option>
                            </select><br />

                            <input type='date' className='form-control' />
                            <br />
                            <input type='date' className='form-control' />
                            <br />
                            <input type="text" className='form-control' placeholder='Number of Days' />
                            <br />
                            <textarea name="" id="Reason " cols="30" rows="2" className='form-control' placeholder='Reason'></textarea>


                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ApplyLeave;
