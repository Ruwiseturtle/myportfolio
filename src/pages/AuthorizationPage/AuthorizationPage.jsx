import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './AuthorizationPage.css';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
// import VerifyEmailPage from "../VerifyEmailPage/VerifyEmailPage";
import  AuthStatus  from "../../constants/userRolesEnum";
import {
  selectAuthSwitchToShow,
  selectIsLoading,
} from "../../redux/auth/authSelectors";
import { setAuthSwitchToShow } from "../../redux/auth/authReducer";
import Loader from "../../components/Loader/Loader";

const AuthorizationPage = () => {
  const authPageToShow = useSelector(selectAuthSwitchToShow);
   const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  

  useEffect(() => {
    // console.log("@@@@@@@@@@@@@authPageToShow");
    // console.log(authPageToShow);
    console.log("==============isLoading======================");
    console.log(isLoading);
    console.log('====================================');
  }, [authPageToShow, isLoading]);

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
          <div className="info">
            Authorization in the development process!!!
          </div>
          {authPageToShow !== AuthStatus.Registered ? (
            <div className="authorizationContainer">
              <div className="tabs">
                <Link
                  to="SignIn"
                  className={`${"tab"} ${
                    authPageToShow === AuthStatus.LogIn ? "active" : ""
                  }`}
                  onClick={() =>
                    dispatch(setAuthSwitchToShow(AuthStatus.LogIn))
                  }
                >
                  SIGN IN
                </Link>

                <Link
                  to="SignUp"
                  className={`${"tab"} ${
                    authPageToShow === AuthStatus.LogUp ? "active" : ""
                  }`}
                  onClick={() =>
                    dispatch(setAuthSwitchToShow(AuthStatus.LogUp))
                  }
                >
                  SIGN UP
                </Link>
              </div>
              <div className="content">
                {authPageToShow === AuthStatus.LogIn && <SignInForm />}
                {authPageToShow === AuthStatus.LogUp && <SignUpForm />}
                {/* {authenticated && <UserInfo/>} */}
              </div>
            </div>
          ) :
            // !isLoading ? (<VerifyEmailPage />) : (<div className="loaderInProjectsPage"><Loader /> </div>)
            isLoading && <Loader />
          }
        </div>
      </div>
    </>
  );
}

export default AuthorizationPage
