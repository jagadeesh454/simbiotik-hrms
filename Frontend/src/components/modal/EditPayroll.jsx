import React, { useState } from 'react';

function EditPayroll({ handleUpdate, isVisible, setVisibility }) {
  const [selectedAccess] = useState('');

  const updateAccess = () => {
    handleUpdate(selectedAccess);
    setVisibility(false);
  };

  return (
    <>
      <div className={`modal fade ${isVisible ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isVisible ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Payroll</h5>
              <button type="button" className="btn-close" onClick={() => setVisibility(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Name' />
                </div>
                <div className="mb-2">
                  <input type="email" className='form-control' placeholder='Email'  />

                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' placeholder='Emp ID'  />

                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={updateAccess}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${isVisible ? 'show' : ''}`} onClick={() => setVisibility(false)}></div>
    </>
  );
}

export default EditPayroll;



