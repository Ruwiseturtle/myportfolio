import React from 'react'
import './Contacts.css';
import ContactForm from '../../components/ContactForm/ContactForm';
// import CallMe from '../../components/CallMe/CallMe';
import { useTranslation } from "react-i18next";

const ContactPage = () => {
const { t } = useTranslation();

  return (
    <div className="container-contact">
      <div className="text-contactMe">
        {/* текст "Написати" */}
        <p className="contact-text-white">{t("Contact.Contact")}</p>
        {/* текст "Мені" */}
        <p className="contact-text-blue">{t("Contact.Me")}</p>
      </div>
      <p className="contact-text-contactMe">
        {/* текст "про сторінку Контакти" */}
        {t("Contact.Description contact")}
      </p>
      <div className="box-contact">
        <ContactForm />
        
      </div>
    </div>
  );
}

export default ContactPage;
