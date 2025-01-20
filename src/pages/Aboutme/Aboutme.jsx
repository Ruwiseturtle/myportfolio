import React from "react";
import "./Aboutme.css";
import imageMyphoto2 from "../../assets/images/myphoto2.jpg";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import { useTranslation } from "react-i18next";

const Aboutme = () => {
  const { t } = useTranslation();

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
                {/* текст "про" */}
                <p className="text-white">{t("AboutMe.About")}</p>
                {/* текст "мене" */}
                <p className="text-blue">{t("AboutMe.Me")}</p>
              </div>
              <p className="aboutme-text">
                {/* текст опис про мене */}
                {t("AboutMe.Description about me")}
              </p>
              <div className="box-reviews">
                {/* текст "відгуки" */}
                <p className="title-reviews">{t("AboutMe.Reviews")}</p>
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
