/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/Dashboard.css';

const initialEmployees = [
  { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
  { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Creative' },
  { id: 3, name: 'Bob Johnson', position: 'Manager', department: 'HR' },
];

const Dashboard = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', department: '' });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = () => {
    setEmployees((prev) => [...prev, { ...newEmployee, id: Date.now() }]);
    setNewEmployee({ name: '', position: '', department: '' });
  };

  const handleEditEmployee = (id) => {
    const employeeToEdit = employees.find((emp) => emp.id === id);
    if (employeeToEdit) {
      setNewEmployee(employeeToEdit);
      setEditingId(id);
    }
  };

  const handleUpdateEmployee = () => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === editingId ? { ...newEmployee, id: emp.id } : emp))
    );
    setNewEmployee({ name: '', position: '', department: '' });
    setEditingId(null);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <div className="dashboard">
      <h1>Employee Management Dashboard</h1>
      <div className="employee-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newEmployee.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newEmployee.position}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newEmployee.department}
          onChange={handleInputChange}
        />
        {editingId ? (
          <button onClick={handleUpdateEmployee}>Update Employee</button>
        ) : (
          <button onClick={handleAddEmployee}>Add Employee</button>
        )}
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button onClick={() => handleEditEmployee(employee.id)}>Edit</button>
                <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

