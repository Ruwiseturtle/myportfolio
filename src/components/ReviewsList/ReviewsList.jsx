import React, {  useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../redux/reviews/reviewsSelectors";
import * as thunks from "../../redux/reviews/reviewsThunks";
import "./ReviewsList.css";
// import projects1 from '../../data/Myprojects.json';
import CardReviews from "../CardReviews/CardReviews";
import imageArrowNext from "../../assets/images/right-arrow.png";

const ReviewsList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const reviews = useSelector(selectors.selectGetReviews);

  
  useEffect(() => {
    dispatch(thunks.getReviewsThunk());
    
  }, [dispatch, currentPage]);

    const handleNextPage = () => {
      setCurrentPage(
        (prevPage) => (prevPage + 1 + reviews.length) % reviews.length
      );
  };
  
  return (
    <div className="container-review-list">
      <div className="review-item">
        <CardReviews key={currentPage} review={reviews[currentPage]} />
        <div className="box-image-arrow-right" onClick={handleNextPage}>
          <img
            className="image-arrow-right"
            src={imageArrowNext}
            alt="arrow right"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
