import React from 'react';
import {  useDispatch } from "react-redux";
import { Link, useNavigate  } from "react-router-dom"; 
import './VerifyEmailPage.css';
import AuthStatus from "../../constants/userRolesEnum";
import { setAuthSwitchToShow } from "../../redux/auth/authReducer";

const VerifyEmailPage = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  
    const handleSignInClick = () => {
      dispatch(setAuthSwitchToShow(AuthStatus.LogIn));
      navigate("/AuthorizationPage/SignIn"); // Переходимо на сторінку SignIn
    };

  return (
    <div className="verifyEmailContainer">
      <div className="VerifyEmailText">
        Please confirm your email by clicking the link in the email. Once
        confirmed, you will be able to log in using your credentials.
        <Link
          to="SignIn"
          className="signInLink"
          onClick={handleSignInClick}
        >
          Sign in here
        </Link>
        
      </div>
    </div>
  );
};

export default VerifyEmailPage
