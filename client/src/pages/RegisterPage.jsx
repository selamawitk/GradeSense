import React from 'react';
import { FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  return (
    <>
    <Navbar />
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ color: 'white' }}>
          <div className="container" style={{ maxWidth: '400px' }}>
            <div className="card px-4 shadow">
              <h2 className="text-center mb-4 fw-bold mt-2 text-white">Create Account</h2>

              {/* Name */}
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <FaUserCircle
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    pointerEvents: 'none',
                    fontSize: '1.2rem',
                    zIndex: 2,
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  style={{ paddingLeft: '2.5rem', backgroundColor: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: '6px' }}
                />
              </div>

              {/* Email */}
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <FaEnvelope
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    pointerEvents: 'none',
                    fontSize: '1.2rem',
                    zIndex: 2,
                  }}
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  style={{ paddingLeft: '2.5rem', backgroundColor: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: '6px' }}
                />
              </div>

              {/* Password */}
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <FaLock
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    pointerEvents: 'none',
                    fontSize: '1.2rem',
                    zIndex: 2,
                  }}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  style={{ paddingLeft: '2.5rem', backgroundColor: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: '6px' }}
                />
              </div>

              {/* Confirm Password */}
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <FaLock
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    pointerEvents: 'none',
                    fontSize: '1.2rem',
                    zIndex: 2,
                  }}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm"
                  style={{ paddingLeft: '2.5rem', backgroundColor: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: '6px' }}
                />
              </div>

              <button className="btn btn-success w-100 mb-3">Register</button>

              <p className="text-center text-white">
                Already have an account? <Link to="/login" className="text-info text-decoration-none">Login</Link>
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default RegisterPage;
