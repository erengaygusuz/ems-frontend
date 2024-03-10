import React, {useEffect, useState} from "react";
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

  // state variable name, state update function name
  const [employees, setEmployees] = useState([])

  const navigator = useNavigate();

  // callback function, dependency list 
  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  function addNewEmployee(){
    navigator('/add-employee')
  }

  return(  
  <div className="container">
    <h2 className="text-center">List of Employees</h2>
    <button className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
    <table className="table table-striped table-bordered mt-2">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
            employees.map(employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            )
        }
      </tbody>
    </table>
  </div>
  )
};

export default ListEmployeeComponent;
