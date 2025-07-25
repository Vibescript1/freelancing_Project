import React, { useState } from "react";
import "./ContestRegistrationForm.css";
import { useNavigate } from "react-router-dom";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfkSWJJ4T2TiNCTQniXTzgLHyac_u6-QRTMv_5Ona9hl2ePNQ/viewform?usp=header";

const ContestRegistrationForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    socialLink: "",
    secondaryLink: "",
    location: "",
    foundContest: "",
    promotePlatform: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.socialLink.trim()) errs.socialLink = "Social media link is required";
    if (!form.location.trim()) errs.location = "Location is required";
    if (!form.foundContest.trim()) errs.foundContest = "This field is required";
    if (!form.promotePlatform.trim()) errs.promotePlatform = "This field is required";
    if (!acceptedTerms) errs.terms = "You must accept the Terms and Conditions";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // handle actual submission here
    }
  };

  if (submitted) {
    return (
      <div className="contest-registration-overlay">
        <div className="contest-registration-card">
          <button className="contest-registration-close" onClick={() => navigate("/")}>&times;</button>
          <h2 className="contest-registration-title">Thank you for registering!</h2>
          <p className="contest-registration-message">We have received your entry. Good luck!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contest-registration-overlay">
      <div className="contest-registration-card">
        <div className="back-container">
          <button
            className="contest-registration-back"
            onClick={onClose ? onClose : () => navigate(-1)}
            aria-label="Back"
          >
            <span className="back-arrow">←</span> Back
          </button>
        </div>
        <h2 className="contest-registration-title">Contest Registration</h2>
        <p className="contest-registration-subtitle">Join our community of talented creators</p>
        <form className="contest-registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className={`contest-registration-input ${errors.name ? 'error' : ''}`}
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Name of the Participant</label>
            {errors.name && <div className="error-text">{errors.name}</div>}
          </div>

          <div className="form-group">
            <input
              className={`contest-registration-input ${errors.socialLink ? 'error' : ''}`}
              type="url"
              name="socialLink"
              placeholder=" "
              value={form.socialLink}
              onChange={handleChange}
              required
            />
            <label>Social Media Link</label>
            {errors.socialLink && <div className="error-text">{errors.socialLink}</div>}
          </div>

          <div className="form-group">
            <input
              className="contest-registration-input"
              type="url"
              name="secondaryLink"
              placeholder=" "
              value={form.secondaryLink}
              onChange={handleChange}
            />
            <label>Secondary Link (optional)</label>
          </div>

          <div className="form-group">
            <input
              className={`contest-registration-input ${errors.location ? 'error' : ''}`}
              type="text"
              name="location"
              placeholder=" "
              value={form.location}
              onChange={handleChange}
              required
            />
            <label>Location of Contestant</label>
            {errors.location && <div className="error-text">{errors.location}</div>}
          </div>

          <div className="form-group">
            <input
              className={`contest-registration-input ${errors.foundContest ? 'error' : ''}`}
              type="text"
              name="foundContest"
              placeholder=" "
              value={form.foundContest}
              onChange={handleChange}
              required
            />
            <label>Where did you find this contest?</label>
            {errors.foundContest && <div className="error-text">{errors.foundContest}</div>}
          </div>

          <div className="form-group">
            <input
              className={`contest-registration-input ${errors.promotePlatform ? 'error' : ''}`}
              type="text"
              name="promotePlatform"
              placeholder=" "
              value={form.promotePlatform}
              onChange={handleChange}
              required
            />
            <label>Platform to promote VOAT</label>
            {errors.promotePlatform && <div className="error-text">{errors.promotePlatform}</div>}
          </div>

          <div className="form-bottom">
            <div className="terms-section">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={e => setAcceptedTerms(e.target.checked)}
                  required
                />
                <span className="checkbox-text">
                  I accept the Terms and Conditions
                </span>
              </label>
              {errors.terms && <div className="error-text">{errors.terms}</div>}
            </div>

            <div className="submit-section">
              <button className="contest-registration-submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="separator">
          <span className="or-text">or</span>
        </div>

        <div className="google-form-section">
          <a
            className="contest-registration-google-btn"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register with Google Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContestRegistrationForm; 