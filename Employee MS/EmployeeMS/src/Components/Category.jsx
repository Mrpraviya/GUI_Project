/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
const Category = () => {

    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/auth/category')
            .then(result => {
                if (result.data.Status) {
                    setCategory(result.data.Result);
                } else {
                    alert(result.data.Error)
                }

            }).catch(err => console.log(err))
    }, [])
    return (
        <div className='d-flex flex-column vh-100 catPage'>
            <div className="px-5 mt-3">
                <div className="d-flex justify-content-left mt-3">
                    <h3 className='homeForm mt-2'>Category List</h3>
                </div>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.map(c => (
                                <tr className="category-row">
                                    <td>{c.name}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/dashboard/add_category" className="btn btn-primary">Add Category</Link>
                </div>
            </div>
            <footer className='py-3 bg-dark text-white text-center mt-auto'>
                <div className='container'>
                    <p>&copy; 2025 All rights reserved. S & P INNOVATIONS Pvt. Ltd.</p>
                </div>
            </footer>
        </div>
    )
}

export default Category