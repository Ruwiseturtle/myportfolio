import React from 'react'
import './Contacts.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <div className="container-contact">
      <div className="text-contactMe">
        <p className="contact-text-white">My</p>
        <p className="contact-text-blue">Skills</p>
      </div>
      <p className="contact-text-contactMe">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
        voluptatum id pariatur vitae laboriosam nostrum ratione sapiente
        suscipit ullam fuga, recusandae, voluptate dignissimos optio fugiat
        commodi hic laudantium. Iure, reprehenderit!
      </p>
      <div className="box-contact">
        <ContactForm/>
      </div>
    </div>
  );
}

export default ContactPage;
