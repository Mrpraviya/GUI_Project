// /* eslint-disable no-unused-vars */
// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: ''
    });

    useEffect(() => {
        // Fetch user profile data when component mounts
        axios.get('http://localhost:5000/auth/profile')
            .then(response => {
                if (response.data.Status) {
                    setUser(response.data.user);
                }
            })
            .catch(error => {
                console.error('Error fetching profile data', error);
            });
    }, []);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col p-4">
                    <h3 className="text-center"><strong>Profile</strong></h3>
                    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="card-body">
                            <h5 className="card-title">User Information</h5>
                            <p className="card-text"><strong>Name:</strong> {user.name}</p>
                            <p className="card-text"><strong>Email:</strong> {user.email}</p>
                            <p className="card-text"><strong>Role:</strong> {user.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
