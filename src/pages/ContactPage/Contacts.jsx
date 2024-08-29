import React from 'react'
import './Contacts.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <div className="container-contact">
      <div className="text-contactMe">
        <p className="contact-text-white">Contact</p>
        <p className="contact-text-blue">Me</p>
      </div>
      <p className="contact-text-contactMe">
        You can message me here. When you click on the button, WhatsApp will
        open, where the message type window will contain the text you have
        already typed and you will only need to click "send" in the WhatsApp
        application.
      </p>
      <div className="box-contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
