import React from 'react';

function AddReport() {
  return (
    <>
    
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">+ADD</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Report</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3 d-flex">
            <input type="text" className="form-control" placeholder='Name:'/>
            <input type="text" className='form-control' placeholder='Purchased Form' /> <br/>
          </div>

            <div className="mb-3 d-flex">
            <input type="date" className='form-control' placeholder='Date' />
            <input type="text" className='form-control' placeholder='Amount' />
            </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Paid By' />

            </div>
        </form>
      </div>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className="btn btn-primary" >SAVE</button>
      </div>
    </div>
  </div>
</div>
    

      
    </>
  );
}

export default AddReport;
