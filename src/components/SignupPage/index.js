import { Component } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Eye, EyeOff, ChevronDown, Home } from "lucide-react";
import axios from "axios";
import "./index.css";

const welcomeCardStyles = `
.welcome-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 90%;
  width: 400px;
  z-index: 1000;
  animation: fadeInOut 5s forwards;
  opacity: 0;
}

.welcome-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.75rem;
}

.welcome-card-message {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.welcome-card-emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  15% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  85% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
}
`;

(function injectStyles() {
  if (!document.getElementById("welcome-card-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "welcome-card-styles";
    styleElement.innerHTML = welcomeCardStyles;
    document.head.appendChild(styleElement);
  }
})();

// Add styles for OTP popup overlay and form
const otpPopupStyles = `
.otp-popup-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.25);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: overlayFadeIn 0.4s;
}
@keyframes overlayFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.otp-popup {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  text-align: center;
  min-width: 320px;
  animation: otpPopupScaleFadeIn 0.6s cubic-bezier(.68,-0.55,.27,1.55);
}
@keyframes otpPopupScaleFadeIn {
  0% { opacity: 0; transform: scale(0.7); }
  60% { opacity: 1; transform: scale(1.08); }
  80% { transform: scale(0.97); }
  100% { opacity: 1; transform: scale(1); }
}
.otp-sent-emoji {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  animation: emojiBounce 1.2s infinite alternate;
}
.otp-form {
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.otp-input {
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid #2563eb;
  font-size: 1.1rem;
  text-align: center;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(37,99,235,0.08);
}
.otp-input:focus {
  border-color: #1741a6;
  box-shadow: 0 0 0 2px #2563eb33;
}
.otp-submit-btn {
  background: linear-gradient(90deg, #2563eb 60%, #1741a6 100%);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  box-shadow: 0 2px 8px rgba(37,99,235,0.08);
}
.otp-submit-btn:hover {
  background: linear-gradient(90deg, #1741a6 60%, #2563eb 100%);
  transform: scale(1.05);
}
.otp-error {
  color: #e11d48;
  font-size: 1rem;
  margin-top: 0.2rem;
  animation: shake 0.4s;
}
@keyframes shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
  100% { transform: translateX(0); }
}
@keyframes emojiBounce {
  0% { transform: translateY(0) scale(1); }
  60% { transform: translateY(-8px) scale(1.15); }
  100% { transform: translateY(0) scale(1); }
}
`;
(function injectOtpPopupOverlayStyles() {
  if (!document.getElementById("otp-popup-overlay-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "otp-popup-overlay-styles";
    styleElement.innerHTML = otpPopupStyles;
    document.head.appendChild(styleElement);
  }
})();

// Add styles for OTP verified sign
const otpVerifiedStyles = `
.otp-verified-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 4000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: overlayFadeIn 0.3s;
}
.otp-verified-popup {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(34,197,94,0.18);
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  text-align: center;
  min-width: 320px;
  animation: otpVerifiedScaleFadeIn 0.5s cubic-bezier(.68,-0.55,.27,1.55);
}
@keyframes otpVerifiedScaleFadeIn {
  0% { opacity: 0; transform: scale(0.7); }
  60% { opacity: 1; transform: scale(1.08); }
  80% { transform: scale(0.97); }
  100% { opacity: 1; transform: scale(1); }
}
.otp-verified-checkmark {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: checkmarkPop 0.7s;
}
@keyframes checkmarkPop {
  0% { transform: scale(0.7); opacity: 0; }
  60% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.otp-verified-message {
  color: #22c55e;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  animation: textPop 0.7s;
}
`;
(function injectOtpVerifiedStyles() {
  if (!document.getElementById("otp-verified-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "otp-verified-styles";
    styleElement.innerHTML = otpVerifiedStyles;
    document.head.appendChild(styleElement);
  }
})();

// Add styles for OTP sent popup
const otpSentPopupStyles = `
.otp-sent-popup {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background: #2563eb;
  color: #fff;
  padding: 1.5rem 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  z-index: 2000;
  text-align: center;
  font-size: 1.2rem;
  animation: otpBounceFadeInOut 2s forwards;
  opacity: 0;
}
.otp-sent-emoji {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  animation: emojiBounce 1.2s infinite alternate;
}
.otp-sent-message {
  font-weight: 600;
  letter-spacing: 0.01em;
  animation: textPop 0.7s;
}
@keyframes otpBounceFadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -60%) scale(0.7);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.08);
  }
  20% {
    transform: translate(-50%, -50%) scale(0.95);
  }
  30% {
    transform: translate(-50%, -50%) scale(1.03);
  }
  40% {
    transform: translate(-50%, -50%) scale(1);
  }
  85% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -40%) scale(0.7);
  }
}
@keyframes emojiBounce {
  0% { transform: translateY(0) scale(1); }
  60% { transform: translateY(-8px) scale(1.15); }
  100% { transform: translateY(0) scale(1); }
}
@keyframes textPop {
  0% { opacity: 0; transform: scale(0.7); }
  60% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}
`;
(function injectOtpPopupStyles() {
  if (!document.getElementById("otp-sent-popup-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "otp-sent-popup-styles";
    styleElement.innerHTML = otpSentPopupStyles;
    document.head.appendChild(styleElement);
  }
})();

class SignupPage extends Component {
  state = {
    name: "",
    email: "",
    role: "",
    phone: "",
    profession: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    errors: {},
    isSubmitting: false,
    redirectToLogin: false,
    showWelcomeCard: false,
    showOtpSentPopup: false, // RESTORED
    showOtpPopup: false,
    otpInput: "",
    otpError: "",
    demoOtp: "",
    location: "",
    isGettingLocation: false,
    showOtpVerifiedSign: false,
  };

  // Backend URLs
  backendUrls = [
    "https://voat.onrender.com", // Production/Render
    "http://localhost:5000", // Local development (keep for dev)
  ];

  componentDidMount() {
    // Check if NavBar has already determined the backend URL
    if (!window.backendUrl) {
      this.checkBackendAvailability();
    }
  }

  // Check which backend is available
  checkBackendAvailability = async () => {
    if (window.backendUrl) {
      console.log("Using already detected backend URL:", window.backendUrl);
      return;
    }

    let workingUrl = null;

    for (const url of this.backendUrls) {
      try {
        // Simple ping to see if this backend is responding
        const response = await fetch(`${url}/api/test-connection`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ test: true }),
          // Short timeout to fail fast
          signal: AbortSignal.timeout(2000),
        });

        if (response.ok) {
          console.log(`Backend available at: ${url}`);
          workingUrl = url;
          break;
        }
      } catch (error) {
        console.log(`Backend at ${url} not available:`, error.message);
      }
    }

    // If we found a working URL, save it
    if (workingUrl) {
      window.backendUrl = workingUrl;
      console.log("Using backend at:", workingUrl);
    } else {
      // Default to production URL if none respond
      window.backendUrl = this.backendUrls[0];
      console.log("No backend responding, defaulting to:", window.backendUrl);
    }
  };

  // Get the current backend URL
  getBackendUrl = () => {
    return window.backendUrl || this.backendUrls[0];
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  togglePasswordVisibility = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  };

  validateForm = () => {
    const { name, email, role, profession, phone, password, confirmPassword, location } =
      this.state;
    const errors = {};

    if (name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email address";
    }

    if (!role) {
      errors.role = "Please select a role";
    }

    if (!profession) {
      errors.profession = "Please enter your profession";
    }

    if (!location) {
      errors.location = "Please enter your location";
    }
    // Require human-readable address, not just coordinates
    else if (/^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(location.trim())) {
      errors.location = "Please enter a valid address, not just coordinates";
    }

    // Updated phone validation - more flexible
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (phone.length < 10) {
      errors.phone = "Phone number must be at least 10 digits";
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleRegisterClick = (e) => {
    e.preventDefault();
    // Validate form first
    if (this.validateForm()) {
      // Generate demo OTP (hardcoded or random)
      const demoOtp = "123456";
      this.setState({
        showOtpSentPopup: true,
        showOtpPopup: false,
        demoOtp,
        otpInput: "",
        otpError: "",
      });
      setTimeout(() => {
        this.setState({ showOtpSentPopup: false, showOtpPopup: true });
      }, 2000); // Show OTP input after 2 seconds
    }
  };

  handleOtpInputChange = (e) => {
    this.setState({ otpInput: e.target.value, otpError: "" });
  };

  handleOtpSubmit = (e) => {
    e.preventDefault();
    const { otpInput, demoOtp } = this.state;
    if (otpInput === demoOtp) {
      // OTP correct, show verified sign, then proceed
      this.setState({ showOtpPopup: false, showOtpVerifiedSign: true }, () => {
        setTimeout(() => {
          this.setState({ showOtpVerifiedSign: false }, () => {
            this.handleSubmitInternal();
          });
        }, 1700); // Show verified sign for 1.7s
      });
    } else {
      this.setState({ otpError: "Invalid OTP. Please try again." });
    }
  };

  // Extracted original handleSubmit logic here
  handleSubmitInternal = async () => {
    this.setState({ showOtpPopup: false });
    this.setState({ isSubmitting: true });
    try {
      const baseUrl = this.getBackendUrl();
      console.log("Using backend URL for signup:", baseUrl);

      // ONLY use the actual API for signup - no test mode fallback
      console.log("Attempting to sign up with API...");

      const response = await axios.post(
        `${baseUrl}/api/signup`,
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          role: this.state.role,
          profession: this.state.profession,
          phone: this.state.phone, // Add this line
          location: this.state.location, // Add location
        },
        {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      console.log("API signup response:", response.data);

      if (response.data && response.data.success && response.data.user) {
        // Success! Use the API response data
        const userData = response.data.user;
        console.log("Successfully signed up with API, user data:", userData);

        // Clear localStorage first to ensure we trigger storage event
        localStorage.removeItem("user");

        // Simulate API delay (reduced)
        await new Promise((resolve) => setTimeout(resolve, 10));
        // Simulate user data
        const userDataSimulated = {
          name: this.state.name,
          email: this.state.email,
          role: this.state.role,
          profession: this.state.profession,
          phone: this.state.phone,
          location: this.state.location,
        };
        localStorage.removeItem("user");
        // No delay for localStorage
        localStorage.setItem("user", JSON.stringify(userDataSimulated));

        // Show welcome message if available
        if (window.showWelcomeMessage) {
          window.showWelcomeMessage();
        } else if (
          window.navbarComponent &&
          typeof window.navbarComponent.showWelcomeMessage === "function"
        ) {
          window.navbarComponent.showWelcomeMessage();
        } else {
          // If no welcome message function is available, trigger login notification as fallback
          if (
            window.navbarComponent &&
            typeof window.navbarComponent.handleLogin === "function"
          ) {
            window.navbarComponent.handleLogin(userData);
          }
        }

        // Show welcome card
        this.setState({ showWelcomeCard: true });

        // Hide welcome card and redirect after 5 seconds
        setTimeout(() => {
          this.setState({
            showWelcomeCard: false,
            redirectToLogin: true,
          });
        }, 2500);
      } else {
        // API response was not as expected
        throw new Error("Invalid response from API");
      }
    } catch (error) {
      console.error("Registration error:", error);

      // Handle error states
      this.setState({
        errors: {
          ...this.state.errors,
          general: "Registration failed. Please try again.",
        },
        isSubmitting: false,
      });
    } finally {
      setTimeout(() => {
        if (this.state.isSubmitting) {
          this.setState({ isSubmitting: false });
        }
      }, 2000);
    }
  };

  // Override form submit to use OTP flow
  handleSubmit = (e) => {
    this.handleRegisterClick(e);
  };

  handleLocationFocus = () => {
    if (window.confirm("Do you want to use your current location?")) {
      this.setState({ isGettingLocation: true });
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              // Use OpenStreetMap Nominatim API for reverse geocoding
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              if (!response.ok) throw new Error('Failed to fetch address');
              const data = await response.json();
              const address = data.display_name || `${latitude}, ${longitude}`;
              this.setState({
                location: address,
                isGettingLocation: false,
              });
            } catch (err) {
              this.setState({
                location: `${latitude}, ${longitude}`,
                isGettingLocation: false,
              });
            }
          },
          (error) => {
            alert("Unable to retrieve your location.");
            this.setState({ isGettingLocation: false });
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
        this.setState({ isGettingLocation: false });
      }
    }
  };

  render() {
    const {
      errors,
      showPassword,
      showConfirmPassword,
      isSubmitting,
      redirectToLogin,
      showWelcomeCard,
      showOtpSentPopup,
      showOtpPopup,
      otpInput,
      otpError,
      name,
      showOtpVerifiedSign,
    } = this.state;

    // Redirect to login page if registration was successful
    if (redirectToLogin) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="register-screen">
        <Link to="/" className="register-home-button">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>

        <div className="register-container">
          <h2 className="register-title">Create your account</h2>

          {errors.general && (
            <div className="register-error-alert">{errors.general}</div>
          )}

          <div className="register-form-wrapper">
            <form className="register-form" onSubmit={this.handleSubmit}>
              {/* Two column layout for Name and Email */}
              <div className="register-row">
                {/* Name Input */}
                <div className="register-input-group">
                  <label htmlFor="name" className="register-label">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    className="register-input"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="register-input-error">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div className="register-input-group">
                  <label htmlFor="email" className="register-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    className="register-input"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="register-input-error">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Two column layout for Role and Profession */}
              <div className="register-row">
                {/* Role Input */}
                <div className="register-input-group">
                  <label htmlFor="role" className="register-label">
                    Role
                  </label>
                  <div className="register-select-container">
                    <select
                      name="role"
                      value={this.state.role}
                      onChange={this.handleInputChange}
                      className="register-input"
                    >
                      <option value="">Select your role</option>
                      <option value="Freelancer/Service Provider">
                        Freelancer/Service Provider
                      </option>
                      <option value="Client/Individual">
                        Client/Individual
                      </option>
                    </select>
                    <div className="register-select-icon">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {errors.role && (
                    <p className="register-input-error">{errors.role}</p>
                  )}
                </div>

                {/* Profession Input */}
                <div className="register-input-group register-input-group-half">
                  <label htmlFor="location" className="register-label">
                    Location
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      name="location"
                      type="text"
                      value={this.state.location}
                      onChange={this.handleInputChange}
                      className="register-input"
                      placeholder="Enter your location"
                      disabled={this.state.isGettingLocation}
                    />
                    <button
                      type="button"
                      className="register-location-btn"
                      onClick={this.handleLocationFocus}
                      disabled={this.state.isGettingLocation}
                    >
                      Current Location
                    </button>
                  </div>
                  {this.state.isGettingLocation && (
                    <p className="register-input-info">Getting your location...</p>
                  )}
                  {errors.location && (
                    <p className="register-input-error">{errors.location}</p>
                  )}
                </div>
              </div>

              {/* Location and Phone Number Inputs in the same row */}
              <div className="register-row">
              <div className="register-input-group register-input-group-half">
                  <label htmlFor="phone" className="register-label">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    className="register-input register-input-half"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="register-input-error">{errors.phone}</p>
                  )}
                </div>
                {/* Location Input */}
               
                <div className="register-input-group">
                  <label htmlFor="profession" className="register-label">
                    Profession
                  </label>
                  <input
                    name="profession"
                    type="text"
                    value={this.state.profession}
                    onChange={this.handleInputChange}
                    className="register-input"
                    placeholder="Enter your profession"
                  />
                  {errors.profession && (
                    <p className="register-input-error">{errors.profession}</p>
                  )}
                </div>

              </div>

              {/* Two column layout for Password fields */}
              <div className="register-row">
                {/* Password Input */}
                <div className="register-input-group">
                  <label htmlFor="password" className="register-label">
                    Password
                  </label>
                  <div className="register-password-container">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      className="register-input"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        this.togglePasswordVisibility("showPassword")
                      }
                      className="register-password-toggle"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="register-input-error">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div className="register-input-group">
                  <label htmlFor="confirmPassword" className="register-label">
                    Confirm Password
                  </label>
                  <div className="register-password-container">
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={this.state.confirmPassword}
                      onChange={this.handleInputChange}
                      className="register-input"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        this.togglePasswordVisibility("showConfirmPassword")
                      }
                      className="register-password-toggle"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="register-input-error">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="register-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Register"}
              </button>
            </form>

            {/* Login Link */}
            <div className="register-divider">
              <div className="register-divider-line"></div>
              <div className="register-divider-text">
                <span className="register-divider-content">
                  Already have an account?
                </span>
              </div>
            </div>

            <Link to="/login" className="register-login-link">
              Login
            </Link>
          </div>
        </div>

        {/* Welcome Card */}
        {showWelcomeCard && (
          <div className="welcome-card">
            <div className="welcome-card-emoji">🚀</div>
            <h2 className="welcome-card-title">Thank You for Registering!</h2>
            <p className="welcome-card-message">
              Welcome to VOAT Network, {name}!
            </p>
          </div>
        )}
        {/* OTP Verification Popup */}
        {showOtpPopup && (
          <div className="otp-popup-overlay">
            <div className="otp-popup">
              <div className="otp-sent-emoji">📧</div>
              <form onSubmit={this.handleOtpSubmit} className="otp-form">
                <input
                  type="text"
                  className="otp-input"
                  placeholder="Enter OTP"
                  value={otpInput}
                  onChange={this.handleOtpInputChange}
                  maxLength={6}
                  autoFocus
                />
                <button type="submit" className="otp-submit-btn">Verify OTP</button>
                {otpError && <div className="otp-error">{otpError}</div>}
              </form>
            </div>
          </div>
        )}
        {/* OTP Verified Sign */}
        {showOtpVerifiedSign && (
          <div className="otp-verified-overlay">
            <div className="otp-verified-popup">
              <div className="otp-verified-checkmark">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="28" fill="#fff" stroke="#22c55e" strokeWidth="4"/>
                  <polyline points="18,32 28,42 44,22" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="points" dur="0.5s" values="18,32 18,32 18,32; 18,32 28,42 28,42; 18,32 28,42 44,22" keyTimes="0;0.5;1" fill="freeze" />
                  </polyline>
                </svg>
              </div>
              <div className="otp-verified-message">OTP Verified!</div>
            </div>
          </div>
        )}
        {/* OTP Sent Popup - only show if not showing OTP input or verified sign */}
        {showOtpSentPopup && !showOtpPopup && !showOtpVerifiedSign && (
          <div className="otp-sent-popup">
            <div className="otp-sent-emoji">📧</div>
            <div className="otp-sent-message">Your OTP is sent to your email</div>
          </div>
        )}
      </div>
    );
  }
}

export default SignupPage;
