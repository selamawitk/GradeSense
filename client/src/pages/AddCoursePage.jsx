// pages/AddCoursePage.jsx
import React from 'react';
import { Container, Form, Card,Button, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';


const AddCoursePage = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5" style={{ maxWidth: '600px' }}>
        <Card className="p-4 text-white">
          <h2 className="text-center mb-4">Add Course</h2>

          <Form>
            {/* Semester Dropdown */}
            <Form.Group className="mb-3" controlId="semester">
              <Form.Label>Semester</Form.Label>
              <Form.Select defaultValue="">
                <option value="">Select Semester</option>
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
              </Form.Select>
            </Form.Group>

            {/* Course Name */}
            <Form.Group className="mb-3" controlId="courseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" placeholder="Enter course name" />
            </Form.Group>

            {/* Credit Hours and Grade */}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="creditHours">
                  <Form.Label>Credit Hours</Form.Label>
                  <Form.Control type="number" placeholder="e.g. 3" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="grade">
                  <Form.Label>Grade</Form.Label>
                  <Form.Control type="text" placeholder="e.g. A, B+, A+" />
                </Form.Group>
              </Col>
            </Row>

            {/* Tags */}
            <Form.Group className="mb-3" controlId="tags">
              <Form.Label>Tags</Form.Label>
              <div className="d-flex flex-wrap">
                {['Major', 'Minor', 'Core', 'Elective', 'Lab'].map((tag, i) => (
                  <Button
                    key={i}
                    label={tag}
                    variant="secondary"
                    className="me-2 mb-2 btn-tag"
                  />
                ))}
              </div>
            </Form.Group>

            {/* Notes */}
            <Form.Group className="mb-3" controlId="notes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Optional notes about the course"
              />
            </Form.Group>

            {/* Submit Buttons */}
            <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary">Cancel</Button>
            <Button variant="success" className="ms-3">
              Save
            </Button>
          </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default AddCoursePage;
