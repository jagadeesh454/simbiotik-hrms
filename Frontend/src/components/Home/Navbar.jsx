import React from 'react';
import Logo from '../../assets/simbiotick logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate()

  function clickHandler() {
    navigate("/login")
  }
  return (
    <>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-absolute top-0 left-0 w-100">
          <div className="container-fluid">
            <a className=" col-md-4 navbar-brand" href="/">
              <img src={Logo} alt="Logo" style={{ marginLeft: "50px", width: "85px", height: "70px" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className='d-flex justify-content-end'>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className=" nav-link active" aria-current="page" href="/"><span className='text-white'>About Us</span></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className=" nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className='text-white'>Product</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className=" dropdown-item" href="/">Action</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className=" nav-link" href="/"><span className='text-white' >Cloud Services</span></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className=" nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className='text-white'> Services</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="  dropdown-item" href="/">Action</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className=" nav-link" href="/"><span className='text-white'>News&Events</span></a>
                  </li>
                  <li className="nav-item">
                    <a className=" nav-link" href="/"><span className='text-white'>Gallery</span></a>
                  </li>
                  <button style={{ color: 'white', background: "transparent" }} type="button" className=" btn btn-light" onClick={clickHandler}>Login</button>
                </ul>
              </div>
            </div>
          </div>
        </nav>

      </div>
    </>
  );
}

export default Navbar;
