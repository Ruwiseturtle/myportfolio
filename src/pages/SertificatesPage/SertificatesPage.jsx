import React from 'react';
import './SertificatesPage.css';
import SertificatPage1 from '../../assets/sertificates/Sertificat_page1.jpg';
// import SertificatPage2 from "../../assets/sertificates/Sertificat_page2.jpg";
// import SertificatPage3 from "../../assets/sertificates/Sertificat_page3.jpg";
// import SertificatPage4 from "../../assets/sertificates/Sertificat_page4.jpg";
// import test from '../../assets/projects/PHONEBOOK.jpeg';
// import test2 from '../../assets/projects/WaterTracker.jpeg';

const SertificatesPage = () => {
    return (
      <div className="container-sertificates">
          <div className="box-sertificates">
                
          <div className="sertificat-item">
            <img src={SertificatPage1} alt="Instagram logo" />
          </div>

          <div className="sertificat-item">
            <img src={SertificatPage1} alt="Instagram logo" />
          </div>
          
        </div>
      </div>
    );
}

export default SertificatesPage
