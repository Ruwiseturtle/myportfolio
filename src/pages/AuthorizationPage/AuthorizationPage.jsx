import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './AuthorizationPage.css';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import  AuthStatus  from "../../constants/userRolesEnum";
import {
  selectAuthSwitchToShow,
  selectIsLoading,
} from "../../redux/auth/authSelectors";
import { setAuthSwitchToShow } from "../../redux/auth/authReducer";
import Loader from "../../components/Loader/Loader";
import { selectIsAuthenticated } from "../../redux/auth/authSelectors";

const AuthorizationPage = () => {
  const authPageToShow = useSelector(selectAuthSwitchToShow);
  const isAuthenticated = useSelector(selectIsAuthenticated);
   const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
     if (isAuthenticated) {
       navigate("/UserPage");
     }
  }, [authPageToShow, isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="AuthorizationLoader">
        <Loader />
      </div>
    );
  }


  
  return (
    <>
      <div className="authorizationContainerMain">
        <div>
          {/* <div className="info">
            Authorization in the development process!!!
          </div> */}

          <div className="authorizationContainer">
            <div className="tabs">
              <Link
                to="SignIn"
                className={`${"tab"} ${
                  authPageToShow === AuthStatus.LogIn ? "activeHref" : ""
                }`}
                onClick={() => dispatch(setAuthSwitchToShow(AuthStatus.LogIn))}
              >
                SIGN IN
              </Link>

              <Link
                to="SignUp"
                className={`${"tab"} ${
                  authPageToShow === AuthStatus.LogUp ? "activeHref" : ""
                }`}
                onClick={() => dispatch(setAuthSwitchToShow(AuthStatus.LogUp))}
              >
                SIGN UP
              </Link>
            </div>
            <div className="content">
              {authPageToShow === AuthStatus.LogIn && <SignInForm />}
              {authPageToShow === AuthStatus.LogUp && <SignUpForm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorizationPage
