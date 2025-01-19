/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EmployeeDetail = () => {
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
            <div className='p-4 d-flex justify-content-center shadow bg-white' style={{ borderRadius: '10px' }}>
                <h3><strong><i> Employee Management System</i></strong></h3>
            </div>
            
            <div className='d-flex justify-content-center flex-column align-items-center mt-5' style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                
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
    
                <div className='d-flex align-items-left flex-column mt-4' style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: '10px 0' }}>Name: {employee.name}</h4>
                    <h4 style={{ margin: '10px 0' }}>Email: {employee.email}</h4>
                    <h4 style={{ margin: '10px 0' }}>Salary: Rs. {employee.salary} (Permonth)</h4>
                </div>
    
                <div className='d-flex justify-content-center flex-row align-items-center mt-4'>
                    <button className='btn btn-primary me-3' style={{ padding: '10px 20px', fontSize: '16px' }}>Edit</button>
                    <button className='btn btn-danger' style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    
        <footer className='mt-auto py-3 bg-dark text-white text-center' style={{ borderTop: '1px solid #e7e7e7' }}>
            <div className='container'>
                <p>&copy; 2025 S&P Brothers (pvt).LTD. All rights reserved.</p>
            </div>
        </footer>
    </div>
    
    
    )
}

export default EmployeeDetail