import React, { useEffect } from "react";
import ReactGA from "react-ga4"; // Імпорт із react-ga4
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import imageInstagram from "../../assets/images/Instagram1.png";
import imagelinkedin from "../../assets/images/linkedin1.png";
import imageViber from "../../assets/images/viber.png";
import imageMyPhoto from "../../assets/images/myphoto1.jpg";
import imageCss from "../../assets/skills/css.png";
import imageHtml from "../../assets/skills/html.png";
import imageJavaScript from "../../assets/skills/javaScript.png";
import imageReact from "../../assets/skills/react.png";
import imageRedux from "../../assets/skills/redux.png";
import DownLoadResume from "../../components/DownLoadResume/DownLoadResume";

// Використання Measurement ID для Google Analytics 4
const trackingId = "G-9DBE2L5FWW";
ReactGA.initialize(trackingId);

const HomePage = () => {
  // Відстеження перегляду сторінки з використанням react-ga4
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  const navigate = useNavigate();

  const handleContactMeClick = () => {
    navigate("/Contact"); // Перенаправляє користувача на сторінку "Contacts"
  };

  return (
    <div className="container-homePage">
      <ul className="list-homepage">
        <li className="item item-left">
          <div>
            <h1 className="text text-name">Hi! I&apos;m Ruslana Matviienko</h1>
            <p className="text text-profession">Frontend Developer</p>
          </div>
          <p className="text text-aboutMe">
            I&apos;m a frontend developer with skills in HTML, CSS, JavaScript,
            (Hooks + Redux), REST API, React, React native, GitHub and have some
            team experience with these tools that I&apos;ve worked really hard
            to learn. Perseverance is my main character trait. After all, for
            this reason, I professionally possess the skills needed in the field
            of website development. In the field that gives me pleasure, because
            for me it is a very interesting profession, where I can use my
            creativity and skills both independently and in a team of other
            smart developers.
          </p>

          <div className="box-contacts">

            <DownLoadResume />
            
            <div className="box-btnContactMe">
              <button
                className="button-contactMe"
                onClick={handleContactMeClick}
              >
                Contact Me
              </button>
            </div>

            <ul className="box-networks">
              <li className="box-Imagecontact">
                <a
                  href="https://www.instagram.com/vychovanetcruslana/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={imageInstagram} alt="Instagram logo" />
                </a>
              </li>
              <li className="box-Imagecontact">
                <a
                  href="https://www.linkedin.com/in/ruslana-matviienko/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={imagelinkedin} alt="LinkedIn logo" />
                </a>
              </li>
              <li className="box-Imagecontact">
                <a
                  href="viber://chat?number=0665166837"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={imageViber} alt="viber icon" />
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="item item-right">
          <div className="circle"></div>
          <div className="circle2"></div>

          <div className="box-myPfoto">
            <img
              className="myPhoto"
              src={imageMyPhoto}
              alt="Ruslana Matviienko"
              width="300"
            />
            <div className="skill-photo javascript">
              <img src={imageJavaScript} alt="LinkedIn logo" />
            </div>
            <div className="skill-photo html">
              <img src={imageHtml} alt="LinkedIn logo" />
            </div>
            <div className="skill-photo css">
              <img src={imageCss} alt="LinkedIn logo" />
            </div>
            <div className="skill-photo react">
              <img className="imgReact" src={imageReact} alt="LinkedIn logo" />
            </div>
            <div className="skill-photo redux">
              <img className="imgRedux" src={imageRedux} alt="LinkedIn logo" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
