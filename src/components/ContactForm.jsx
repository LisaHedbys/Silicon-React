import React, { useState } from "react";

const ContactForm = () => {
  // State för att hantera formulärvärden
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    specialist: "",
  });

  // Hantera ändringar i formulärfält
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Formulärvalidering
  const handleSubmit = (event) => {
    event.preventDefault();

    const { fullname, email, specialist } = formData;

    if (fullname.trim() === "") {
      alert("Please enter your full name.");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (specialist === "") {
      alert("Please select a specialist.");
      return;
    }

    // Om allt är korrekt
    console.log("Full Name: " + fullname);
    console.log("Email: " + email);
    console.log("Specialist: " + specialist);
    alert("Thank you! We'll get back to you as soon as possible!");
  };

  return (
    <div id="consform" className="cont-form">
      <h4>Get Online Consultation</h4>
      <form onSubmit={handleSubmit}>
        <div className="forms write">
          <label htmlFor="fullname">Full name</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="forms write">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="forms">
          <label htmlFor="specialist">Specialists</label>
          <select
            id="specialist"
            name="specialist"
            value={formData.specialist}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Select a specialist
            </option>
            <option value="1">Specialist 1</option>
            <option value="2">Specialist 2</option>
            <option value="3">Specialist 3</option>
          </select>
        </div>
        <button id="submit-btn" className="appo-btn" type="submit">
          Make an appointment
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
