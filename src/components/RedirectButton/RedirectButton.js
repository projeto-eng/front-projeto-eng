import React from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectButton({ label, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className="redirect-button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default RedirectButton;