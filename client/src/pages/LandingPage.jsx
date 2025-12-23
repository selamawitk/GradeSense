import React from 'react'; 
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <nav className="navbar navbar-light fixed-top">
        <div
          className="container"
          style={{ maxWidth: '1140px', justifyContent: 'flex-end', display: 'flex' }}
        >
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link mx-3" to="/login">Login</Link>
          <Link className="nav-link" to="/register">Register</Link>
        </div>
      </nav>

      <div style={{ paddingTop: '56px' }}></div>

      <div className="container text-center mt-5">
        <h1 className="fw-bold display-4 mb-3">🎓 GPA Tracker</h1>
        <p className="lead mb-4">
          Track your GPA. Stay on top. Graduate with confidence.
        </p>

        <p className="fs-5 mb-4">
          Whether you're in high school or university, our GPA Tracker helps you stay
          organized, motivated, and in control of your academic journey.
        </p>

        <p className="fs-5 mb-4">
           Visualize your progress over time.  
           Plan ahead for your goals.  
           Never miss a semester target again.
        </p>

        <p className="fs-5 mb-5">
          Your academic success starts with clarity nand we’re here to help you every step of the way.
        </p>
      </div>
    </>
  );
};

export default LandingPage;
