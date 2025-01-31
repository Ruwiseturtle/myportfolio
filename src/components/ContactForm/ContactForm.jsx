import React, { useState } from "react";
import "./ContactForm.css";
// import CallMe from "../CallMe/CallMe";

// const MY_NUMBER_PHONE = "380665166837";
const MY_NUMBER_PHONE = "380665166837";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


    const sendMessage = (e) => {
      // e.preventDefault();
      const phoneNumber = MY_NUMBER_PHONE;
      // Формування повідомлення
      const messageForSend =
        `Name: ${formData.name} ${formData.lastName} ` +
        `${formData.email ? `Email: ${formData.email} ` : ""}` +
        `Tel: ${formData.phone}  ` + 
        `${formData.message}`;

      // Кодування повідомлення
      const message = encodeURIComponent(messageForSend);
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

      // Відкриття посилання в новій вкладці
      window.open(url, "_blank");
    };
  
    
  return (
    <form className="form-container">
      <div className="form-row">
        <div className={`form-group ${formData.name ? "has-content" : ""}`}>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className={`form-group ${formData.lastName ? "has-content" : ""}`}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>

      <div className="form-row">
        <div className={`form-group ${formData.email ? "has-content" : ""}`}>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className={`form-group ${formData.phone ? "has-content" : ""}`}>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            required
          />
          <label htmlFor="phone">Phone Number</label>
        </div>
      </div>

      <div
        className={`form-group form-message ${
          formData.message ? "has-content" : ""
        }`}
      >
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          required
        />
        <label htmlFor="message">Message</label>
      </div>
      <div className="box-form-contacts">
        <div className="box-btnContact">
          <button
            className="button-contact"
            type="submit"
            onClick={sendMessage}
          >
            Contact Me
          </button>
          {/* <CallMe /> */}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
