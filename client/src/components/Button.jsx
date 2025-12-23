import React from 'react';
import { Button } from 'react-bootstrap';

// Reusable Btn component
const Btn = ({ type, align = 'end', tags = [], onCancel, onSave, onUpdate, onLogout }) => {
  // Helper to align content
  const alignment = {
    start: 'd-flex justify-content-start',
    center: 'd-flex justify-content-center',
    end: 'd-flex justify-content-end',
  };

  switch (type) {
    case 'update':
      return (
        <div className={`${alignment[align]} mt-3`}>
          <Button className='bg-success'
            style={{
              color: '#fff',
              border: 'none',
            }}
            onClick={onUpdate}
          >
            Update
          </Button>
        </div>
      );

    case 'logout':
      return (
        <div className={`${alignment[align]} mt-3`}>
          <Button
            variant="danger"
            style={{
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
            }}
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      );

    case 'tags':
      return (
        <div className="d-flex flex-wrap">
          {tags.map((tag, i) => (
            <Button
              key={i}
              type="button"
              style={{
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                border: '1px solid rgba(0, 123, 255, 0.3)',
                color: '#007bff',
                fontWeight: '500',
              }}
              className="me-2 mb-2"
            >
              {tag}
            </Button>
          ))}
        </div>
      );

    case 'save-cancel':
      return (
        <div className={`${alignment[align]} mt-3`}>
          <Button
            variant="secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
            }}
            className="ms-3"
            onClick={onSave}
          >
            Save
          </Button>
        </div>
      );

    default:
      return null;
  }
};

export default Btn;
