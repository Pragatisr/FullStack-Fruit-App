import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    });

    const signupSubmitHandler = async () => {

        try {

            const response = await axios.post('https://fruit-app-ii92.onrender.com/signup', userDetails)
            console.log(response?.data, 'resp');
            if (response?.status === 200)
                toast.success(response?.statusText)
        }
        catch (err) {
            console.log(err?.response?.data);
            toast.error(err?.response?.statusText)
        }
    }

    


  return (
    <>
   <ToastContainer position="top-right" autoClose={3000} />
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "40rem" }}>
        <h3 className="text-center mb-4 text-primary">Create Account</h3>

        <div >
          <div className="mb-3 row align-items-center" id="name">
            <label htmlFor="name" className="col-md-3 col-form-label fw-bold">
              Name
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                 onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
          </div>
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
          <button  onClick={signupSubmitHandler} className="btn btn-primary w-100">
            Sign Up
          </button>
        </div>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none text-primary">
            Login
          </a>
        </p>
      </div>

    </div>
    </>
    
  )
}

export default Signup
