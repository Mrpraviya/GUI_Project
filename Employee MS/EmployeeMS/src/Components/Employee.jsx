/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Employee = () => {
    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/auth/employee')
            .then(result => {
                if (result.data.Status) {
                    setEmployee(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            }).catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/auth/delete_employee/' + id)
            .then(result => {
                if (result.data.Status) {
                    window.location.reload();
                } else {
                    alert(result.data.Error);
                }
            }).catch(err => console.log(err));
    };

    return (
        <div className="d-flex flex-column vh-100 addemPage">
            <div className="d-flex flex-column px-5 ">
                <div className="d-flex justify-content-left mt-3">
                    <h3 className='homeForm mt-2'>Employee List</h3>
                </div>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Salary(LKR)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.map(e => (
                                <tr className="employee-row" key={e.id}>
                                    <td>{e.name}</td>
                                    <td><img src={`http://localhost:5000/Images/` + e.image} className="employee_image" alt="Employee" /></td>
                                    <td>{e.email}</td>
                                    <td>{e.address}</td>
                                    <td>{e.salary}</td>
                                    <td>
                                        <Link to={'/dashboard/edit_employee/' + e.id} className="btn btn-info btn-sm me-3">Edit</Link>
                                        <button className="btn btn-warning btn-sm" onClick={() => handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/dashboard/add_employee" className="btn btn-primary">Add Employee</Link>
                </div>

            </div>
            <footer className='py-3 bg-dark text-white text-center mt-auto'>
                <div className='container'>
                    <p>&copy; 2025 All rights reserved. S & P INNOVATIONS Pvt. Ltd.</p>
                </div>
            </footer>
        </div>
    );
};

export default Employee;
