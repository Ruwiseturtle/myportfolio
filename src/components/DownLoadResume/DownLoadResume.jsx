import React from 'react';
import { MdDownloading } from "react-icons/md";
import "./DownLoadResume.css";

const DownLoadResume = () => {
  return (
    <div className='boxDownloadResume'>
      <a href="/Resume_Ruslana.pdf" download="My_Resume.pdf">
        <MdDownloading size={ 40} />
      </a>
    </div>
  );
}

export default DownLoadResume
