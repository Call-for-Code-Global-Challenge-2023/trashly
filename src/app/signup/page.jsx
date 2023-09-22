import React from 'react'

const Signup = () => {
    return (
        <div className="container pg_margin d-flex align-items-center justify-content-center max-height">
            <div className="card my-card p-4">
                <h1 className='text-center'>Signup</h1>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Enter your name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" />
                    </div>
                    <center className='mb-3'>
                        <button className="btn btn-success">Signup!</button>
                    </center>
                    <p className='text-center'><a href="/login" className="text-light">Login here!</a></p>
                </form>
            </div>
        </div>
    )
}

export default Signup;