import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const FormInput = ({ icon: Icon, type, placeholder }) => (
  <div className="mb-3 d-flex align-items-center px-2 py-1 border rounded">
    {Icon && <Icon className="me-2 text-light" />}
    <input
      type={type}
      placeholder={placeholder}
      className="form-control bg-transparent border-0 text-white shadow-none"
    />
  </div>
);

const ForgotPasswordPage = () => {
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ color: 'white' }}>
        <div className="container" style={{ maxWidth: '400px' }}>
          <div className="card p-4 shadow" style={{ backgroundColor: '#1e2b36' }}>
            <h2 className="text-center mb-4 fw-bold mt-2 text-white">Forgot Password</h2>

            <FormInput icon={FaEnvelope} type="email" placeholder="Enter your email" />

            <div className="text-end mb-3">
              <Link to="/reset-password" className="text-decoration-none" style={{ color: 'lightblue' }}>
                Reset Password?
              </Link>
            </div>

            <button className="btn btn-success w-100 mb-3">Continue</button>

            <p className="text-center mb-0 text-white">
              Remembered?{' '}
              <Link to="/login" className="text-info text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
