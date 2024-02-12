import React from 'react';
import Admin from './components/Home/Admin';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './components/adminpanel/Dashboard';
import Users from './components/adminpanel/Users';
import Leaves from './components/adminpanel/Leaves';
import Employee from './components/adminpanel/Employee';
import Holidays from './components/adminpanel/Holidays';
import Payroll from './components/adminpanel/Payroll';
import Reports from './components/adminpanel/Reports';
import { IoHome } from "react-icons/io5";
import EmployeeContextAPI from './context/employeeContext';



function App() {
  return (
    <div>
      <EmployeeContextAPI>
        <Routes>
          <Route path='/' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} icon={<IoHome />} />
          <Route element={<Users />} path='/users' />
          <Route element={<Leaves />} path='/leavereq' />
          <Route element={<Employee />} path='/employee' />
          <Route element={<Holidays />} path='/holiday' />
          <Route element={<Payroll />} path='/payroll' />
          <Route element={<Reports />} path='/report' />
        </Routes>
      </EmployeeContextAPI>
    </div>

  );
}

export default App;

