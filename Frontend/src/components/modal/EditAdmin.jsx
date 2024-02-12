

import React, { useState } from 'react';

function EditAdmin({ handleUpdate, isVisible, setVisibility }) {
  const [selectedAccess, setSelectedAccess] = useState('');

  const updateAccess = () => {
    // Perform the update logic with selectedAccess
    handleUpdate(selectedAccess);
    // Close the modal
    setVisibility(false);
  };

  return (
    <>
      <div className={`modal fade ${isVisible ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isVisible ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Admin Access</h5>
              <button type="button" className="btn-close" onClick={() => setVisibility(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <select
                className='form-control'
                value={selectedAccess}
                onChange={(e) => setSelectedAccess(e.target.value)}
              >
                <option value="">Select Access</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Employee">Employee</option>
              </select>
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

export default EditAdmin;

