import React from 'react';
import { Card, Container, Form, Button, Row, Col, FormControl, FormGroup } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const EditCoursePage = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5" style={{ maxWidth: '600px' }}>
        <Card className="text-white mt-5 p-4">
          <h2 className="text-center mt-3">Edit Course</h2>

          <Form.Group className="mb-3">
            <Form.Label>Semester</Form.Label>
            <Form.Select>
              <option value="semester1">Semester 1</option>
              <option value="semester2">Semester 2</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course Name</Form.Label>
            <Form.Control type="text" placeholder="Enter course name" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Credit Hours</Form.Label>
                <FormControl type="text" placeholder="e.g 3" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" placeholder="A+, A, B" />
              </Form.Group>
            </Col>
          </Row>

          <FormGroup className="mb-3">
            <Form.Label>Tags</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {['Major', 'Minor', 'Core', 'Elective', 'Lab'].map((tag, i) => (
                <Button key={i} variant="outline-light" size="sm">
                  {tag}
                </Button>
              ))}
            </div>
          </FormGroup>

          <Form.Group className="mb-3">
            <Form.Label>Notes</Form.Label>
            <FormControl as="textarea" rows={2} placeholder="Notes about the course" />
          </Form.Group>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary">Cancel</Button>
            <Button variant="success" className="ms-3">
              Save
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default EditCoursePage;
