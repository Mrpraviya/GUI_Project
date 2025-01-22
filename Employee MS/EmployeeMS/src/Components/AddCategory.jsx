/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css';
const AddCategory = () => {
    const [category, setCategory] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/auth/add_category', { category })
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/category')
                }
                else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex flex-column vh-100 addCPage"> 
        <div className='d-flex justify-content-center align-items-center  h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2 className="text-center">Select Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="category"><strong> Category :</strong> </label>
                        <br />
                        <input type="text" name='category' placeholder='Enter Category'
                            onChange={(e) => setCategory(e.target.value)} className='form-control rounded-1 mt-2' />
                    </div>
                    <div className="col-12 d-flex justify-content-center">

                    <button className="btn btn-primary align-items-center w-50 "> <strong> <h5>Add</h5></strong></button>
                    </div>
                </form>
            </div>
           
        </div>

        </div>
    )
}

export default AddCategory