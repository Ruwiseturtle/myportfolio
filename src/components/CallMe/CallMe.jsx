import React from 'react'
import  './CallMe.css';
// import iconPhone from '../../assets/images/mobilePhone.png';
import { ReactComponent as PhoneIcon } from "../../assets/images/phone2.svg";

const CallMe = () => {
  return (
    <div className="boxCallme">
      <div className="text-callMe">+38066XXXXXX7</div>
      <div class="call-button">
        <a href="tel:+380665166837">
          <PhoneIcon className="callmeIcon" />
        </a>
      </div>
    </div>
  );
}

export default CallMe
