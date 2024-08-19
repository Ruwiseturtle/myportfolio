import React from 'react'
import './Aboutme.css';
import imageMyphoto2 from '../../assets/images/myphoto2.jpg';

const Aboutme = () => {
  return (
    <div className="container-aboutMe">
      <ul className="list-aboutme">
        <li className="container-aboutme-left">
          <div className="box-aboutme-myphoto2">
            <div className="circle-aboutme"></div>
            <div className="quarter1"></div>
            <div className="quarter2"></div>
            <div className="box-myphoto2">
              <img
                className="myphoto2"
                src={imageMyphoto2}
                alt="Ruslana Matviienko"
              />
            </div>
          </div>
        </li>
        <li className="container-aboutme-right">
          <h1 className="box-aboutme-text">
            <div className="text-title">
              <p className="text-white">About</p>
              <p className="text-blue">Me</p>
            </div>
            <p className="aboutme-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ratione nisi obcaecati aut vel architecto
              reprehenderit ab dolorem? Quisquam ut quia voluptates voluptate
              magnam porro temporibus corrupti, ducimus dolorum modi? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              blanditiis ad vero provident nostrum temporibus minus saepe atque
              dolor aut laudantium voluptas nam, accusantium, voluptates sequi
              incidunt quae dolorum impedit?
            </p>
          </h1>
        </li>
      </ul>
      <div className="line-aboutme"></div>
    </div>
  );
}

export default Aboutme
