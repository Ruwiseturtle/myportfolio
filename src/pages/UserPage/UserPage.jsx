import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserPage.css';
import { useSelector } from "react-redux";
import { selectUser } from '../../redux/auth/authSelectors';
import { selectIsAuthenticated } from '../../redux/auth/authSelectors';

const UserPage = () => {
  const currentUser = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/AuthorizationPage/SignIn");
    }

    console.log("UserPage");
    console.log(currentUser);
  }, [isAuthenticated, currentUser, navigate]);
  

  console.log("UserPage isAuthenticated");
  console.log(isAuthenticated);
  
 

    return (
      <div className="containerUserPage">
        xxx
        <div className="textUserPage">
          it's your page {currentUser?.login ? `, ${currentUser.login}` : ""}.
          The page is under development. I want to come up with interesting
          content for you
        </div>
      </div>
    );
}

export default UserPage
