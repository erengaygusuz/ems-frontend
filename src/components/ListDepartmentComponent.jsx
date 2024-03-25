import React, { useState } from 'react'

const ListDepartmentComponent = () => {

  let dummyData = [
    {
      "id": "1",
      "name": "Department 1",
      "description": "Description 1"
    },
    {
      "id": "2",
      "name": "Department 2",
      "description": "Description 2"
    }
  ]

  const [departments, setDepartments] = useState(dummyData);

  return (
    <div className='container'>
      <h2 className='text-center'>List of Departments</h2>
      <table className='table table-striped table-bordered table-responsive mt-2'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {
          departments.map(department => 
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>{department.description}</td>
            </tr>
            )
        }
        </tbody>
      </table>
    </div>
  )
}

export default ListDepartmentComponent