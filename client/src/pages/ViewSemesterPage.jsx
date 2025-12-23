
import React, { useState } from 'react';
import { Accordion, Card, Table, Button, Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const semestersData = [
  {
    name: 'Fall 2024',
    courses: [
      { name: 'Math', credit: 3, grade: 'A', gpa: 4.0 },
      { name: 'History', credit: 2, grade: 'B', gpa: 3.0 },
    ],
  },
  {
    name: 'Spring 2025',
    courses: [
      { name: 'Physics', credit: 3, grade: 'A-', gpa: 3.7 },
    ],
  },
];

function ViewSemesterPage() {
  const [semesters, setSemesters] = useState(semestersData);

  const calculateSemesterGPA = (courses) => {
    const totalCredits = courses.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = courses.reduce((sum, c) => sum + c.gpa * c.credit, 0);
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  return (
    <>
    <Navbar />
    <Container className='mt-5' style={{maxWidth:'800px'}}>
        <Card className='p-3 text-white' style={{marginTop:'50px'}}>
            <h2 className='text-center'>Select Semester</h2>
    <Accordion defaultActiveKey="0">
      {semesters.map((semester, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{semester.name}</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover  style={{backgroundColor:'transparent'}}>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Credit</th>
                  <th>Grade</th>
                  <th>GPA</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course, i) => (
                  <tr key={i}>
                    <td>{course.name}</td>
                    <td>{course.credit}</td>
                    <td>{course.grade}</td>
                    <td>{course.gpa}</td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
            <p><strong>Semester GPA:</strong> {calculateSemesterGPA(semester.courses)}</p>
            <Button variant="success" size="sm" onClick={() => window.print()}>Print/Export</Button>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    </Card>
    </Container>
    </>
  );
}

export default ViewSemesterPage;

