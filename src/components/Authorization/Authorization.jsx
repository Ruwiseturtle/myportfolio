import React, {  useState } from "react";
// import { useSelector } from "react-redux";
import {
  // selectAuthenticated,
  // selectUser,
} from "../../redux/auth/authSelectors";
import style from './Authorization.module.css';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
// import UserInfo from "../UserInfo/UserInfo";

const Authorization = () => {
  const [activeTab, setActiveTab] = useState("signIn");
  // const authenticated = useSelector(selectAuthenticated);
  // const user = useSelector(selectUser);

  // if (authenticated) {
  //    console.log(user);
     
  //    return <UserInfo user={user} />;
  //  }

  return (
    <>
      <div className={style.info}>Authorization in the development process</div>
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
          {activeTab === "signUp" && <SignUp setActiveTab={setActiveTab} />}
          {/* {authenticated && <UserInfo/>} */}
        </div>
      </div>
    </>
  );
}

export default Authorization
