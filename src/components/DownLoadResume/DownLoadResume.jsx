import React from 'react';
import { MdDownloading } from "react-icons/md";
import "./DownLoadResume.css";

const DownLoadResume = () => {
  return (
    <div className="boxDownloadResume">
      <a
        href="/assets/Resume_Ruslana.pdf"
        download="My_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="downloadButton"
      >
        <MdDownloading />
      </a>
    </div>
  );
}

export default DownLoadResume
