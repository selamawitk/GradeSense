import React from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RequiredGpaPage = () => {
  return (
    <>
      <Navbar />
      <Container className='mt-5' style={{ maxWidth: '600px' }}>
        <Card
          className='text-white p-4'
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
          <h2 className='text-center mt-2'>Required GPA Calculator</h2>

          <Form.Group className="mt-3">
            <Form.Label>Target GPA</Form.Label>
            <Form.Control type='text' placeholder='3.7' />
          </Form.Group>

          <p className="mt-3">You need a GPA of at least 3.9 next semester.</p>

          <Link className='text-decoration-none text-success mb-5' to='/degree-progress'>
            Degree Progress Tracker
          </Link>
        </Card>
      </Container>
    </>
  )
}

export default RequiredGpaPage
