/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */

/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        salary: "",
        address: "",
        category_id: "",
        image: "",

    });
    const [category, setCategory] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/auth/category')
            .then(result => {
                if (result.data.Status) {
                    setCategory(result.data.Result);
                } else {
                    alert(result.data.Error)
                }

            }).catch(err => console.log(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', employee.name);
        formData.append('email', employee.email);
        formData.append('password', employee.password);
        formData.append('address', employee.address);
        formData.append('salary', employee.salary);
        formData.append('image', employee.image);
        formData.append('category_id', employee.category_id);

        axios.post('http://localhost:5000/auth/add_employee/', formData)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/employee')
                }
                else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="d-flex flex-column vh-100 addEPage">
            <div className='d-flex justify-content-center align-items-center mt-3 '>
                <div className='p-3 rounded w-50 border'>
                    <h3 className="text-center">Employee Details</h3>
                    <form className="row g-1" onSubmit={handleSubmit}>
                        <div className='col-12'>
                            <label for="inputName" className="form-label" >Name : </label>
                            <input type="text" className="form-control rounded-2" id="inputName" placeholder="Enter your Name"
                                onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
                        </div>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Email : </label>
                            <input type="email" className="form-control rounded-2" id="inputEmail4" placeholder="Enter your Email" autoComplete="off"
                                onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />

                        </div>

                        <div className="col-12">
                            <label for="inputPassword4" className="form-label">Password : </label>
                            <input type="password" className="form-control rounded-2" id="inputPassword4" placeholder="Enter your Password"
                                onChange={(e) => setEmployee({ ...employee, password: e.target.value })} />

                            <label for="inputSalary" className="form-label">Salary : </label>
                            <input type="text" className="form-control rounded-2" id="inputSalary" placeholder="Enter salary" autoComplete="off"
                                onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} />

                        </div>

                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address : </label>
                            <input type="text" className="form-control rounded-2" id="inputAddress" placeholder="No/XXXX Main St" autoComplete="off"
                                onChange={(e) => setEmployee({ ...employee, address: e.target.value })} />

                        </div>

                        <div className="col-12">
                            <label for="category" className="form-label">Category : </label>
                            <select
                                name="category"
                                id="category"
                                className="form-select"
                                onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}>
                                {
                                    category.map(c => {
                                        return <option value={c.id}>{c.name}</option>;
                                    })
                                }

                            </select>

                        </div>

                        <div className="col-12 mb-3">
                            <label className="form-label" for="inputGroupFile01"  >Select Image : </label>
                            <input type="file" className="form-control rounded-2" id="inputGroupFile01" name="image"
                                onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })} />

                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary w-25">Add</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default AddEmployee