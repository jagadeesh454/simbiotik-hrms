import { createContext, useContext, useEffect, useState } from "react";

const employeeContext = createContext()


const EmployeeContextAPI = ({ children }) => {
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/api/v1/employees")
            .then(data => data.json())
            .then(data => setEmployee(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <employeeContext.Provider value={employee}>
            {children}
        </employeeContext.Provider>
    )
}
export default EmployeeContextAPI


export const useEmployees = () => {
    return useContext(employeeContext)
}