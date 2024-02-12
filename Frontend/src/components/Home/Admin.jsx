import React from 'react';
import Navbar from './Navbar';
import Side from '../../assets/SIDE IMAGE 1.png'

function Admin() {
  return (
    <div className='position-relative'>
      <Navbar />
      <img src={Side} alt="Side" style={{ width: "100%", height: "90vh" }} />
      <div className="position-absolute" style={{ marginTop: "-400px", marginLeft: "6%" }}>
        <p style={{ fontSize: "xx-large" }}>Explore <br /> The <b>Future</b></p>
        <span>Simbiotik Technologies, a cutting edge technology <br />
          lab providing software services and solutions to 40+ customers <br />
          across multiple geographic regions.</span> <br />
        <button className="btn btn-primary">
          Discover
        </button>
      </div>
    </div>
  );
}

export default Admin;
