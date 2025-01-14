import React, { useState } from "react";
import "./SertificatesPage.css";
import SertPage1 from "../../assets/sertificates/Sertificat_page1.jpg";
import SertPage2 from "../../assets/sertificates/Sertificat_page2.jpg";
import SertPage3 from "../../assets/sertificates/Sertificat_page3.jpg";
import SertPage4 from "../../assets/sertificates/Sertificat_page4.jpg";
import SertificatCISCO from "../../assets/sertificates/Sertificat_CISCO.jpg";
import SertificatCISCO1 from "../../assets/sertificates/Sertificat_CISCO1.jpg";
import SertifivateEnglish from "../../assets/sertificates/english_a1_elementary.jpg";

const SertificatesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);

  const sertificatePages = [SertPage1, SertPage2, SertPage3, SertPage4];
  const sertificatePages2 = [SertificatCISCO1, SertificatCISCO];

  const handleNextPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage + 1 + sertificatePages.length) % sertificatePages.length
    );  
    
  };

   const handleNextPage2 = () => {
     setCurrentPage2(
       (prevPage) =>
         (prevPage + 1 + sertificatePages2.length) % sertificatePages2.length
     );
   };

  return (
    <div className="container-sertificates">
      <div className="box-sertificates">
        {/*сертифікат GOIT */}
        <div className="sertificat-item1" onClick={handleNextPage}>
          <img
            src={sertificatePages[currentPage]}
            alt={`Sertificate page ${currentPage + 1}`}
          />
        </div>

        {/*сертифікат CISCO*/}
        <div className="sertificat-item2" onClick={handleNextPage2}>
          <img
            src={sertificatePages2[currentPage2]}
            alt={`Sertificate page ${currentPage2 + 1}`}
          />
        </div>

        {/*сертифікат CISCO*/}
        {/* <div className="sertificat-item2">
          <img src={SertificatCISCO} alt="Instagram logo" />
        </div> */}

        {/*сертифікат English*/}
        <div className="sertificat-item3">
          <img src={SertifivateEnglish} alt="Instagram logo" />
        </div>
      </div>
    </div>
  );
};

export default SertificatesPage;
