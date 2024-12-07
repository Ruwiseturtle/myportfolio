import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSwitch } from "../../redux/auth/authSelectors";
import style from "./Authorization.module.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import UserInfo from "../UserInfo/UserInfo";

const Authorization = () => {
  const [activeTab, setActiveTab] = useState("signIn");
  const switcher = useSelector(selectSwitch);
  // const user = useSelector(selectUser);

 

  return (
    <>
      <div className="authorizationContainerMain">
        <div className={style.info}>
          Authorization in the development process
        </div>
        {switcher ? (
          <div className={style.authorizationContainer}>
            <div className={style.tabs}>
              <Link
                to="SignIn"
                className={`${style.tab} ${
                  activeTab === "signIn" ? style.active : ""
                }`}
                onClick={() => setActiveTab("signIn")}
              >
                SIGN IN
              </Link>

              <Link
                to="SignUp"
                className={`${style.tab} ${
                  activeTab === "signUp" ? style.active : ""
                }`}
                onClick={() => setActiveTab("signUp")}
              >
                SIGN UP
              </Link>
            </div>
            <div className={style.content}>
              {activeTab === "signIn" && <SignIn />}
              {activeTab === "signUp" && <SignUp setActiveTab={setActiveTab} />}
              {/* {authenticated && <UserInfo/>} */}
            </div>
          </div>
        ) : (
          <UserInfo />
        )}
      </div>
    </>
  );
};

export default Authorization;
