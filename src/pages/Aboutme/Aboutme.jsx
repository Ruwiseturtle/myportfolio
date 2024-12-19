import React from "react";
import "./Aboutme.css";
import imageMyphoto2 from "../../assets/images/myphoto2.jpg";
import ReviewsList from "../../components/ReviewsList/ReviewsList";

const Aboutme = () => {
  
  return (
    <div className="container-aboutMe">
      <div className="list-aboutme">
        <div className="container-aboutme-left">
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
        </div>
        <li className="container-aboutme-right">
          <div className="box-aboutme">
            <h1 className="box-aboutme-text">
              <div className="text-title">
                <p className="text-white">About</p>
                <p className="text-blue">Me</p>
              </div>
              <p className="aboutme-text">
                No rain - no flowers. I had a heavy "rain" and now I can offer
                such "flowers" that are in my skills - HTML, CSS, JavaScript,
                React, React-nativ, Redux, Node. You can also read about me in
                the first reviews about me from my colleagues.
              </p>
              <div className="box-reviews">
                <p className="title-reviews">Reviews</p>
                <ReviewsList />
              </div>
            </h1>
          </div>
        </li>
      </div>
      {/* <div className="line-aboutme"></div> */}
    </div>
  );
};

export default Aboutme;
