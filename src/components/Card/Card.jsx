import React from "react";
import "./Card.css";
import imageHref from "../../assets/images/href.png";

//лоадер не завантажувати, бо тут лінива загрузка картинок!!!
// зображення знаходяться в папці `src/assets/projects/`
const getImagePath = (imageName) => {
  try {
    return require(`../../assets/projects/${imageName}`);
  } catch (err) {
    console.error(`Image ${imageName} not found`);
    return null;
  }
};

const Card = ({ project }) => {

  // Якщо project не визначено, повертаємо заглушку
  if (!project) {
    return (
      <li className="project-list-item">
        <div className="card">
          <p>No project provided</p>
        </div>
      </li>
    );
  }

  // Перевіряємо, чи є URL або локальний шлях
  const isUrl = project?.image && (project.image.startsWith("http") || project.image.startsWith("https"));


  // Визначаємо джерело зображення
const imageSrc = isUrl
  ? project.image
  : project.image
  ? getImagePath(project.image)
      : null; 

  
  return (
    <li className="project-list-item">
      <div className="card">
        {imageSrc ? (
          <img className="image-project" src={imageSrc} alt={project.title} />
          
        ) : (
          <p>Image not found</p>
        )}
        
        
        <p className="text-framework">{project?.frameworks}</p>
        <a
          href={project?.link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="box-href-to-project">
            <img className="image-href" src={imageHref} alt="Instagram logo" />
            <span className="title-text-card">{project?.title}</span>
            <p className="text-projectType">{project?.project_type}</p>
          </div>
        </a>
      </div>
    </li>
  );
};

export default Card;
