import React from "react";
import "./CardSkill.css";

// зображення знаходяться в папці `src/assets/projects/`
const getImagePath = (imageName) => {
  try {
    return require(`../../assets/skills/${imageName}`);
  } catch (err) {
    console.error(`Image ${imageName} not found kakashka`);
    return null;
  }
};

const CardSkill = ({ skill }) => {
  // Перевіряємо, чи є URL або локальний шлях
  const isUrl =
    skill?.skillPhoto.startsWith("http") || skill?.skillPhoto.startsWith("https");

  // Визначаємо джерело зображення
  const imageSrc = isUrl ? skill?.skillPhoto : getImagePath(skill?.skillPhoto);

  return (
    <li className="list-item">
      <div className="skill-item">
        {skill?.skillPhoto ? (
          <div className="image-wrapper">
            <img className="image-skill" src={imageSrc} alt={skill.skillName} />
            <div className="image-text">{skill.skillName}</div>
          </div>
        ) : (
          <p>Image not found</p>
        )}
      </div>
    </li>
  );
};

export default CardSkill;
