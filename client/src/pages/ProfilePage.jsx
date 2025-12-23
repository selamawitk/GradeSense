import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Form, Card, Row, Col } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import Btn from '../components/Button';

const ProfilePage = () => {
  const handleUpdate = () => {
    console.log('Update clicked');
    // Add your update logic here
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  // Add your logout logic here
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5" style={{ maxWidth: '800px' }}>
        <h2 className="mb-3 text-white">Profile</h2>

        {/* Profile Card */}
        <Card className="p-4">
          <Form>
            <div className="d-flex text-white">
              <FaUserCircle className="ms-2 mt-3" size={85} />
              <Row className="mb-4 justify-content-end mt-3 ms-5 w-100">
                <h6 className="text-white ms-5">Profile</h6>
                <Col>
                  <Form.Group className="mt-4">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mt-4 ms-4">
                    <Form.Control type="text" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* Update button via Btn */}
            <Btn className="bg-success" type="update" align="end" onClick={handleUpdate} />
          </Form>
        </Card>

        {/* Password Card */}
        <Card className="p-4 mt-4">
          <Form>
            <Row>
              <Col>
                <h6 className="text-white ms-2">Password</h6>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control type="password" placeholder="New Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
              </Col>
            </Row>

            {/* Another update button */}
            <Btn type="update" align="end" onClick={handleUpdate} />
          </Form>
        </Card>

        {/* Logout button */}
        <div className="mt-3">
          <Btn type="logout" align="end" onClick={handleLogout} />
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;