import React from 'react';
// import { MdDownloading } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

import "./DownLoadResume.css";

const DownLoadResume = () => {
  return (
    <div className="boxDownloadResume">
      <a
        href="/myportfolio/Resume_Ruslana.pdf"
        download="My_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="downloadButton"
      >
        <FaDownload />
      </a>
    </div>
  );
}

export default DownLoadResume
