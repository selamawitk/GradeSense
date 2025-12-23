import React from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
const CreateSemesterPage = () => {
  return (
    <>
    <Navbar />
    <Container style={{maxWidth:'600px'}}>
        <Card className='text-white mt-5 p-5'>
            <h2 className='text-center mt-2'>Create Semester</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Select>
                        <option value="" disabled selected>Select semester </option>
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 1</option>
                    </Form.Select>
                    <Form.Label className='mt-2'>Start Date:</Form.Label>
                    <Form.Control type='date'/>
                    <Form.Label className='mt-2'>End Date:</Form.Label>
                    <Form.Control type='date'/>
                </Form.Group>
                <div className='d-flex justify-content-end mt-4 '>
                    <Button className='bg-success'>cancel</Button>
                    <Button className='ms-2 bg-success'>create</Button>
                </div>
                
            </Form>
        </Card>
    </Container>
      
    </>
  )
}

export default CreateSemesterPage
