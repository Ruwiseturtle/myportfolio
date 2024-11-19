import React, { useState } from "react";
import style from './Authorization.module.css';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


const Authorization = () => {
  const [activeTab, setActiveTab] = useState("signIn");

  return (
    <>
      Authorization in the development process
      <div className={style.authorizationContainer}>
        <div className={style.tabs}>
          <button
            className={`${style.tab} ${
              activeTab === "signIn" ? style.active : ""
            }`}
            onClick={() => setActiveTab("signIn")}
          >
            SIGN IN
          </button>
          <button
            className={`${style.tab} ${
              activeTab === "signUp" ? style.active : ""
            }`}
            onClick={() => setActiveTab("signUp")}
          >
            SIGN UP
          </button>
        </div>
        <div className={style.content}>
          {activeTab === "signIn" && <SignIn />}
          {activeTab === "signUp" && <SignUp />}
        </div>
      </div>
    </>
  );
}

export default Authorization
