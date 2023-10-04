"use client";

import React, { useState } from 'react'
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from "@/firebase";
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        router.push("/")
      })
      .catch((error) => alert(`[error] ${error.code} ${error.message}`));
  }
    
  return (
    <div className="container pg_margin d-flex align-items-center justify-content-center max-height">
      <div className="card my-card p-4">
        <h1 className='text-center'>Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="passwordInput" placeholder="Enter your password" />
          </div>
          <center className='mb-3'>
            <button className="btn btn-success" onClick={handleSubmit}>Login!</button>
          </center>
            <p className='text-center'><a href="/signup" className="text-light">Signup here!</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login;