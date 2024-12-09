import React, { useState } from "react";
import "./SertificatesPage.css";
import SertPage1 from "../../assets/sertificates/Sertificat_page1.jpg";
import SertPage2 from "../../assets/sertificates/Sertificat_page2.jpg";
import SertPage3 from "../../assets/sertificates/Sertificat_page3.jpg";
import SertPage4 from "../../assets/sertificates/Sertificat_page4.jpg";
import SertificatCISCO from "../../assets/sertificates/Sertificat_CISCO.jpg";

const SertificatesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const sertificatePages = [SertPage1, SertPage2, SertPage3, SertPage4];


  const handleNextPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage + 1 + sertificatePages.length) % sertificatePages.length
    );
   
  };

  return (
    <div className="container-sertificates">
      <div className="box-sertificates">
        <div className="sertificat-item1" onClick={handleNextPage}>
          <img
            src={sertificatePages[currentPage]}
            alt={`Sertificate page ${currentPage + 1}`}
          />
        </div>
        {/* <div className="text-and-sertificat-container"> */}
          {/* <div className="text-contactMe">
            <p className="contact-text-white">My</p>
            <p className="contact-text-blue">Sertificates</p>
          </div> */}
          <div className="sertificat-item2">
            <img src={SertificatCISCO} alt="Instagram logo" />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SertificatesPage;
