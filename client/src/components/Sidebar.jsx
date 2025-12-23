import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column text-white vh-100 p-3"
      style={{
        width: '250px',
        position: 'fixed',
        background: 'linear-gradient(135deg, #081c25, #1c394a)',
      }}
    >
      <h4 className="text-center mb-4">GPA App</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/" className="sidebar-link">Landing</Nav.Link>
        <Nav.Link as={Link} to="/register" className="sidebar-link">Register</Nav.Link>
        <Nav.Link as={Link} to="/login" className="sidebar-link">Login</Nav.Link>
        <Nav.Link as={Link} to="/forgot-password" className="sidebar-link">Forgot Password</Nav.Link>
        <Nav.Link as={Link} to="/reset-password" className="sidebar-link">Reset Password</Nav.Link>
        <Nav.Link as={Link} to="/dashboard" className="sidebar-link">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/add-course" className="sidebar-link">Add Course</Nav.Link>
        <Nav.Link as={Link} to="/view-semester" className="sidebar-link">View Semester</Nav.Link>
        <Nav.Link as={Link} to="/edit-course" className="sidebar-link">Edit Course</Nav.Link>
        <Nav.Link as={Link} to="/create-semester" className="sidebar-link">Create Semester</Nav.Link>
        <Nav.Link as={Link} to="/profile" className="sidebar-link">Profile</Nav.Link>
        <Nav.Link as={Link} to="/degree-progress" className="sidebar-link">Degree Progress</Nav.Link>
        <Nav.Link as={Link} to="/required-gpa" className="sidebar-link">Required GPA</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
