

/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './style.css';

const Home = () => {

  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setEmployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryAmount();
    AdminRecords();

  }, [])

  const AdminRecords = () => {
    axios.get('http://localhost:5000/auth/admin_records')
      .then(result => {
        if (result.data.Status) {
          setAdmins(result.data.Result)
        } else {
          alert(result.data.Error)
        }
      })
  }

  const adminCount = () => {
    axios.get('http://localhost:5000/auth/admin_count')
      .then(result => {
        if (result.data.Status) {
          setAdminTotal(result.data.Result[0].admin)
        }
      })

  }

  const employeeCount = () => {
    axios.get('http://localhost:5000/auth/employee_count')
      .then(result => {
        if (result.data.Status) {
          setEmployeeTotal(result.data.Result[0].employee)
        }
      })

  }

  const salaryAmount = () => {
    axios.get('http://localhost:5000/auth/salary_amount')
      .then(result => {
        if (result.data.Status) {
          setSalaryTotal(result.data.Result[0].salary)
        }
      })

  }

  return (
    <div className='d-flex flex-column vh-100 homePage'>
      <div className='p-3 d-flex justify-content-around homeForm'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 admins-row'>
          <div className='text-center pb-1'>
            <h4>Admins</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Count : </h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 admins-row'>
          <div className='text-center pb-1'>
            <h4>Employees</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Count : </h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 admins-row'>
          <div className='text-center pb-1'>
            <h4>Balance</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total :</h5>
            <h5>Rs. {salaryTotal}</h5>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column mt-4 px-5 pt-3 adminForm flex-grow-1'>
        <div className='flex-grow-1'></div> {/* This pushes the table down */}
        <div >
          <h3>List of Admins</h3>
          <table className='table px-5'>
            <thead className='homeForm'>
              <tr >
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map(a => (
                <tr className="admins-row" key={a.email}>
                  <td>{a.email}</td>
                  <td>
                    <button className="btn btn-info btn-sm me-3">Edit</button>
                    <button className="btn btn-warning btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className='py-3 bg-dark text-white text-center'>
        <div className='container'>
          <p>&copy; 2025 All rights reserved. S & P INNOVATIONS Pvt. Ltd.</p>
        </div>
      </footer>
    </div>

  )
}

export default Home