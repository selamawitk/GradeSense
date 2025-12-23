// pages/DegreeProgressPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Card, Form, FormControl, Button } from 'react-bootstrap';
import CreditProgressBar from '../components/ProgressBar'; 

const DegreeProgressPage = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5" style={{ maxWidth: '600px' }}>
        <Card className='text-white p-4'
          style={{
            position: 'fixed',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '600px',
            zIndex: 1050,
            background: 'linear-gradient(135deg, #081c25, #1c394a)',
            boxShadow: '0 4px 12px rgba(12, 37, 54, 0.7)',
            borderRadius: '12px',
          }}
        >
          <h2 className="text-white text-center">Degree Progress Tracker</h2>

          <Form.Group className="text-white mt-3 mb-3">
            <Form.Label>Total credits required</Form.Label>
            <FormControl type="text" placeholder="e.g 120" />
          </Form.Group>

          <CreditProgressBar earnedCredits={90} totalCredits={120} />
            <div className='d-flex text-white justify-content-between'>
                <div>
                    <p>Total credits left</p>
                    <p>30</p>
                </div>
            <div>
                <p>Gpa needed for graduation</p>
                <p>2.80</p>
            </div>
            </div>
          <div className="d-flex justify-content-end">
            <Button className='bg-secondary'>Cancel</Button>
            <Button className="ms-2 bg-success">Save</Button>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default DegreeProgressPage;
