import React from "react";
import "./CardRewiews.css";

// зображення знаходяться в папці `src/assets/reviews/`
const getImagePath = (imageName) => {
  try {
    if (imageName) {
      return require(`../../assets/reviews/${imageName}`);
    } else {
      console.error("Image name is not provided");
      return null;
    }
  } catch (err) {
    console.error(`Image ${imageName} not found`);
    return null;
  }
};

const CardReviews = ({ review }) => {


  // Якщо review не визначено, повертаємо заглушку
  if (!review) {
    return (
      <li className="review-list-item">
        <div className="card-review">
          <p>No review provided</p>
        </div>
      </li>
    );
  }

  // Перевіряємо, чи є pathPhoto
  const pathPhoto = review?.pathPhoto;
  if (!pathPhoto) {
    return (
      <li className="review-list-item">
        <div className="card-review">
          <p>No image available</p>
        </div>
      </li>
    );
  }

  // Перевіряємо, чи є URL або локальний шлях
  const isUrl = pathPhoto && (pathPhoto.startsWith("http") || pathPhoto.startsWith("https"));

  // Визначаємо джерело зображення
  const imageSrc = isUrl ? pathPhoto : getImagePath(pathPhoto);


  return (
    <li className="review-list-item">
      <div className="card-review">
        {imageSrc ? (
          <img className="image-review" src={imageSrc} alt={pathPhoto} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
    </li>
  );
};

export default CardReviews;
