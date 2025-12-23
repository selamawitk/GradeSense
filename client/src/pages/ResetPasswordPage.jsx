import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const FormInput = ({ icon: Icon, type, placeholder }) => (
  <div className="mb-3 d-flex align-items-center border rounded px-3 py-2">
    <Icon className="me-2 text-light" />
    <input
      type={type}
      placeholder={placeholder}
      className="form-control bg-transparent border-0 text-white"
    />
  </div>
);

const ResetPasswordPage = () => {
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ color: 'white' }}>
        <div className="container" style={{ maxWidth: '400px' }}>
          <div className="card p-4 shadow" style={{ backgroundColor: '#1e2b36' }}>
            <h2 className="text-center mb-4 fw-bold mt-2 text-white">Reset Password</h2>

            <FormInput icon={FaLock} type="password" placeholder="New Password" />
            <FormInput icon={FaLock} type="password" placeholder="Confirm Password" />

            <button className="btn btn-success w-100 mb-3">Reset Password</button>

            <div className="text-center text-white mb-2">
              Remembered your password?{' '}
              <Link to="/login" className="text-decoration-none text-info">
                Login
              </Link>
            </div>

            <p className="text-center mb-0 text-white">
              Don't have an account?{' '}
              <Link to="/register" className="text-info text-decoration-none">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
