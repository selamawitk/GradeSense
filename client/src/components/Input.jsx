import React from 'react';

const FormInput = (props) => {
  const { icon: Icon, type, placeholder } = props;

  return (
    <div style={{ position: 'relative', marginBottom: '1rem' }}>
      <Icon
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          pointerEvents: 'none',
          fontSize: '1.2rem',
          zIndex: 2,
        }}
      />
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        style={{
          paddingLeft: '2.5rem',
          backgroundColor: 'transparent',
          color: 'white',
          border: '1.5px solid rgba(255,255,255,0.4)',
          borderRadius: '6px',
        }}
      />
    </div>
  );
};

export default FormInput;
