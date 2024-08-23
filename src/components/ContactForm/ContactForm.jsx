import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
        phone: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
console.log('куку');

        switch (e.currentTarget.name) {
            case "name":
                setFormData({ ...formData, name: e.currentTarget.value });
                break;
            case "lastName":
                setFormData({ ...formData, lastName: e.currentTarget.value });
                break;
            case "email":
                setFormData({ ...formData, email: e.currentTarget.value });
                break;
            case "phone":
                setFormData({ ...formData, phone: e.currentTarget.value });
                break;
            case "message":
                setFormData({ ...formData, message: e.currentTarget.value });
                break;
            default:
                break;
        };
    }

  return (
    <form className="form-container">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            
            onChange={handleChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" ></input>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ></input>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" ></input>
        </div>
      </div>

      <div className="form-message">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />
      </div>
      <div className="box-btnContact">
        <button className="button-contact">Contact Me</button>
      </div>
    </form>
  );
};

export default ContactForm;
