import React from "react";
import "./Card.css";
import imageHref from "../../assets/images/href.png";

// Якщо ваші зображення знаходяться в папці `src/assets/images/`
const getImagePath = (imageName) => {
  try {
    return require(`../../assets/projects/${imageName}`);
  } catch (err) {
    console.error(`Image ${imageName} not found`);
    return null;
  }
};



const Card = ({ project }) => {
const imageSrc = getImagePath(project.image);
 
  return (
    <li>
      <div className="card">
        {/* <img
          className="image-project"
          src={project.image}
          alt={project.title}
        /> */}
        {imageSrc ? (
          <img className="image-project" src={imageSrc} alt={project.title} />
        ) : (
          <p>Image not found</p>
        )}
        
        <p className="text-framework">{project.frameworks}</p>
        <a
          href="https://www.instagram.com/vychovanetcruslana/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="box-href-to-project">
            <img className="image-href" src={imageHref} alt="Instagram logo" />
            <span className="title-text-card">{project.title}</span>
          </div>
        </a>
      </div>
    </li>
  );
};

export default Card;
