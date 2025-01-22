/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';
const Start = () => {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/verify')
            .then(result => {
                if (result.data.Status) {
                    if (result.data.role === "admin") {
                        navigate('/dashboard')
                    } else {
                        navigate('/employee_detail/' + result.data.id)
                    }
                }
            }).catch(err => console.log(err))
    }, [])



    return (
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-4 rounded w-150 border loginForm text-center" style={{ maxWidth: "400px", margin: "0 auto", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                {/* Logo */}
                <img
                    src="/public/Images/sp5.jpg"
                    className="mt-2 logo"
                    alt="S&P Logo"
                    style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "20px" }}
                />

                {/* Welcome Message */}
                <div className="mb-4">
                    <h1><strong><i>Welcome To The HRMS !.</i></strong></h1>
                </div>

                {/* Login Form */}
                <h2 className="text-center mb-4">Login As . . .</h2>
                <div className="d-flex justify-content-between">
                    <button
                        type="button"
                        className="btn btn-primary w-45"
                        onClick={() => { navigate('/employee_login') }}
                        style={{ padding: "10px 20px" }}
                    >
                        Employee
                    </button>
                    <button
                        type="button"
                        className="btn btn-success w-45"
                        onClick={() => { navigate('/adminlogin') }}
                        style={{ padding: "10px 20px" }}
                    >
                        Admin
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Start