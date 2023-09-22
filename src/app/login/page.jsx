import React from 'react'

const Login = () => {
  return (
    <div className="container pg_margin d-flex align-items-center justify-content-center max-height">
      <div className="card my-card p-4">
        <h1 className='text-center'>Login</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" />
          </div>
          <center className='mb-3'>
            <button className="btn btn-success">Login!</button>
          </center>
            <p className='text-center'><a href="/signup" className="text-light">Signup here!</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login;