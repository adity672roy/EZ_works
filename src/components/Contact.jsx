import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email");
      return;
    }

    // API call
    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setError("Email cannot end with @ez.works");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
        setEmail("");
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError("Error submitting the form");
    }
  };

  return (
    <div className="form">
      {error && <p className="error">{error}</p>}
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="contact">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact_input"
        />
        <button type="submit" className="contact_button">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
