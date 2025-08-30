import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const loginSubmitHandler = async () => {

    try {

      const response = await axios.post('http://localhost:3001/login', userDetails)
      if (response?.status === 200) {
        toast.success(response?.data?.message)
        const token = response?.data?.token
        localStorage.setItem('token', token)
        navigate('/products')
      }
    }
    catch (err) {
      toast.error(err?.response?.data?.message)
    }
  }




  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ width: "40rem" }}>
          <h3 className="text-center mb-4 text-primary">Login</h3>

          <div >
            <div className="mb-3 row align-items-center" id="email">
              <label htmlFor="email" className="col-md-3 form-label fw-bold">
                Email
              </label>
              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row align-items-center" id="password">
              <label htmlFor="password" className="col-md-3 form-label fw-bold">
                Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={(e) => setUserDetails(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
            </div>
            <button onClick={loginSubmitHandler} className="btn btn-primary w-100">
              Login
            </button>
          </div>

          <p className="text-center mt-3">
            New User?{" "}
            <a href="/signup" className="text-decoration-none text-primary">
              Register Here
            </a>
          </p>
        </div>

      </div>
    </>

  )
}

export default Login
