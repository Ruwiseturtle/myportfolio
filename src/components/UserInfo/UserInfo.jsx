import React from "react";
import { useDispatch } from "react-redux";
import "./UserInfo.css";
import { selectToken } from '../../redux/auth/authSelectors';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { checkSwitchTrue } from '../../redux/auth/authReducer';

const UserInfo = ({ user }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  function checkSwitch(){
     dispatch(checkSwitchTrue());
  }

  if (!token) {
    return (
      <>
        <div>
          Thank you for registering! Please check your email and confirm your
          address by clicking on the link.
          <Link to="SignIn" onClick={checkSwitch}>
            confirm
          </Link>
        </div>
      </>
    );
}


  return (
    <div className="containerUserInfo">
      <div className="boxGreeting">
        Hello ! I'm very glad you registered on this page!
      </div>
      <div className="textForExit">
        You can log out of your account by clicking on this button
      </div>
      <div className="box-btnExitAcount">
        <button className="btnExitAcount">Exit</button>
      </div>
    </div>
  );
};

export default UserInfo;
