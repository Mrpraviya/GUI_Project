/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';

const EmployeeDetail = () => {

    const [showWarning, setShowWarning] = useState(false);

    const handleEditClick = () => {
        setShowWarning(true);
        setTimeout(() => {
            setShowWarning(false);
        }, 1500); // Hide the warning after 1.5 seconds
    };

    const navigate = useNavigate();
    const [employee, setEmployee] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:5000/employee/detail/' + id)
            .then(result => {
                setEmployee(result.data[0])
            })
            .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:5000/employee/logout')
            .then(result => {
                if (result.data.Status) {
                    localStorage.removeItem("valid")
                    navigate('/')
                }
            }).catch(err => console.log(err))
    }
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <div className='p-3 d-flex justify-content-between shadow headForm' style={{ borderRadius: '15px' }}>
                    <img
                        src='/public/Images/sp5.jpg'
                        className="logo"
                        alt="S&P Logo"
                        style={{ width: '60px', height: '60px' }}
                    />
                    <h2><strong><i>Human Resource Management System</i></strong></h2>
                    <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontSize: 'inherit'
                    }}>
                        <i className="fs-4 bi-person"> Profile</i>
                    </button>
                </div>



                <div className='d-flex justify-content-center flex-column align-items-center mt-4 proPage' style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} >

                    <img
                        src={`http://localhost:5000/Images/` + employee.image}
                        className='emp_det_image'
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid #007bff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />

                    <div className='d-flex align-items-left flex-column mt-4 homeForm' style={{ textAlign: 'center' }}>
                        <h4 style={{ margin: '10px 0' }}>Name: {employee.name}</h4>
                        <h4 style={{ margin: '10px 0' }}>Email: {employee.email}</h4>
                        <h4 style={{ margin: '10px 0' }}>Salary: Rs. {employee.salary} (Permonth)</h4>
                    </div>

                    <div className='d-flex justify-content-center flex-row align-items-center mt-5 mb-2'>
                        <button
                            className={`btn ${showWarning ? 'btn-warning' : 'btn-primary'} me-3`}
                            style={{ padding: '10px 20px', fontSize: '16px' }}
                            onClick={handleEditClick}
                        >
                            {showWarning ? 'Restricted.' : 'Edit'}
                        </button>
                        <button className='btn btn-danger' style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleLogout}>Logout</button>

                        {/* {showWarning && (
                            <div className='alert alert-warning p-1 mt-3' role='alert'>
                                Warning: You do not have access for Edit your profile!
                            </div>
                        )} */}
                    </div>
                </div>
            </div>

            <footer className='mt-auto py-3 bg-dark text-white text-center' style={{ borderTop: '1px solid #e7e7e7' }}>
                <div className='container'>
                    <p>&copy; 2025 All rights reserved. S & P INNOVATIONS Pvt. Ltd.</p>
                </div>
            </footer>
        </div>


    )
}

export default EmployeeDetail