import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import img from "../../assets/employeeimage.png"

function LeaveStatus({ leaveInfo }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Leave Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-evenly'>
        <img src={img} alt="not" style={{ height: "100px", width: "100px", marginRight:"190px"}}/>
        <p>{leaveInfo.ename}<br/> <br/>{leaveInfo.edes}</p>
        <br/>
        <p>{leaveInfo.jdate}<br/><br/>{leaveInfo.edep}</p>
        </div>
        <p>{leaveInfo.eemail}</p>
        <p>{leaveInfo.leave.appliedOn}</p>
        <p>{leaveInfo.leave.from}</p>
        <p>{leaveInfo.leave.to}</p>
        <p>{leaveInfo.leave.type}</p>
        <p>{leaveInfo.leave.reason}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Approve
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Reject
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LeaveStatus;
