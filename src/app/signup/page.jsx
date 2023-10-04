"use client";

import React, { useState } from 'react'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from "../../firebase";
import { useRouter } from 'next/navigation';

const Signup = () => {
    const router = useRouter();

    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) return alert("Password and Confirm Password must match.");

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              // console.log(user);
              router.push("/login")
          })
          .catch((error) => alert(`[error] ${error.code} ${error.message}`));
    }

    return (
        <div className="container pg_margin d-flex align-items-center justify-content-center max-height">
            <div className="card my-card p-4">
                <h1 className='text-center'>Signup</h1>
                <form>
                    {/* <div className="mb-3">
                        <label htmlFor="nameInput" name="name" className="form-label">Enter your name</label>
                        <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Password</label>
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="form-control" id="passwordInput" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password</label>
                        <input required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confPassword" className="form-control" id="confirmPasswordInput" placeholder="Re-enter the password" />
                    </div>
                    <center className='mb-3'>
                        <button className="btn btn-success" onClick={handleSubmit}>Signup!</button>
                    </center>
                    <p className='text-center'><a href="/login" className="text-light">Login here!</a></p>
                </form>
            </div>
        </div>
    )
}

export default Signup;