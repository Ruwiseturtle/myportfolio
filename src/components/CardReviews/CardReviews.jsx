import React from "react";
import "./CardRewiews.css";

// зображення знаходяться в папці `src/assets/reviews/`
const getImagePath = (imageName) => {
  
  try {
    return require(`../../assets/reviews/${imageName}`);
  } catch (err) {
    console.error(`Image ${imageName} not found`);
    return null;
  }
};

const CardReviews = ({ review }) => {
  console.log(review);
  
  // Перевіряємо, чи є URL або локальний шлях
   const isUrl =
     review.pathPhoto &&
     (review.pathPhoto.startsWith("http") ||
       review.pathPhoto.startsWith("https"));

  // Визначаємо джерело зображення
  const imageSrc = isUrl ? review.pathPhoto : getImagePath(review.pathPhoto);

  return (
    <li className="review-list-item">
      <div className="card-review">
        {imageSrc ? (
          <img className="image-review" src={imageSrc} alt={review.pathPhoto} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
    </li>
  );
};

export default CardReviews;
