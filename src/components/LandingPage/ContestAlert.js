import React from "react";
import "./ContestAlert.css";
import { useNavigate } from "react-router-dom";

const ContestAlert = ({ onClose }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/contest-registration");
  };

  return (
    <div className="contest-alert-overlay">
      <div className="contest-alert-card">
        <button className="contest-alert-close" onClick={onClose} aria-label="Close">&times;</button>
        <h2 className="contest-alert-title">
          <span className="emoji">🎉</span>
          Join the Contest!
        </h2>
        <p className="contest-alert-message">
          Win ₹10,000 & exclusive prizes!<br />
          Show off your talent—register now!
        </p>
        <button className="contest-alert-register" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default ContestAlert; 