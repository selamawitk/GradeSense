// components/CreditProgressBar.jsx
import React from 'react';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

const CreditProgressBar = ({ earnedCredits = 0, totalCredits = 120 }) => {
  const progressPercent = (earnedCredits / totalCredits) * 100;

  return (
    <div>
      <BootstrapProgressBar now={progressPercent} variant="success" />
      <div className="text-white text-center mt-2 mb-3">
        {earnedCredits} / {totalCredits} credits completed
      </div>
    </div>
  );
};

export default CreditProgressBar;
