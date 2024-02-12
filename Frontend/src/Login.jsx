import React, { useState } from 'react';
import LoginImage from './assets/login.png'
import { useNavigate } from 'react-router-dom';

function Login() {
    const credentials={username:"test@test.com",pass:"1234"}
    const [username,setUsername]=useState("")
    const [pass,setPass]=useState("")
    const navtoHome=useNavigate()
    let navtoDashboard=useNavigate()

    function clickHandle()
    {
        navtoHome("/")
    }

    function loginHandler()
    {
        if(username===credentials.username && pass===credentials.pass)
        {
            navtoDashboard("/dashboard")
        }
        else{
            alert("Incorrect Password!")
            setPass("")
            setUsername("")
        }

    }
    function usernameHandler(e)
    {
        setUsername(e.target.value)
    }
    function passHandler(e)
    {
        setPass(e.target.value)
    }
    return (
        <>

            <div className="container">
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <img src={LoginImage} alt="" />

                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h2>Login to Simbiotick</h2>
                        </div>
                        <div className="row">
                            <p>Please fill your Simbiotik details</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={usernameHandler} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                                        <input type="password" className=" form-control" id='inputPassword' onChange={passHandler} />
                                    </div>
                                    <div className='d-flex justify-content-evenly'>
                                        <button className='btn btn-primary' onClick={loginHandler}>Login</button>
                                    <button className='btn btn-info' onClick={clickHandle}>Return to Home</button></div>
                                    <div style={{color:"blue",textAlign:"center"}}><a href='/'>Forgot your Password ?</a></div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div></>

    );
}

export default Login;
