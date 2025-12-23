import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import FormInput from '../components/Input';
import { Form } from 'react-bootstrap';

const LoginPage = () => {
  const navigate = useNavigate(); // Step 1: get navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // stop page reload

    // In a real app, you'd check credentials here
    // For now, just simulate a successful login:
    navigate('/dashboard'); // Step 2: navigate to dashboard
  };
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ color: 'white' }}>
        <div className="container" style={{ maxWidth: '400px' }}>
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4 fw-bold mt-2 text-white">Login</h2>
            <Form onSubmit={handleLogin}>
            <FormInput icon={FaEnvelope} type="email" placeholder="Email" />
            <FormInput icon={FaLock} type="password" placeholder="Password" />

            <div className="text-end mb-3">
              <Link to="/forgot-password" className="text-decoration-none" style={{ color: 'lightblue' }}>
                Forgot Password?
              </Link>
            </div>

            <button className="btn btn-success w-100 mb-3">Login</button>

            <p className="text-center mb-0" style={{ color: 'white' }}>
              Don't have an account?{' '}
              <Link to="/register" className="text-info text-decoration-none">
                Register
              </Link>
            </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
