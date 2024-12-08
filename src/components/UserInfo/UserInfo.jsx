import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectToken } from '../../redux/auth/authSelectors';
import { checkSwitchTrue } from '../../redux/auth/authReducer';
import "./UserInfo.css";

const UserInfo = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);


  function checkSwitch() {
    dispatch(checkSwitchTrue());
  }

  if (token == null) {
    return (
      <div>
        Thank you for registering! Please check your email and confirm your
        address by clicking on the link.
        <Link
          to="signIn"         
          onClick={checkSwitch}
        >
          confirm
        </Link>
      </div>
    );
  }

  return (
    <div className="containerUserInfo">
      <div className="boxGreeting">
        Привіт! Ми дуже раді, що ви зареєструвались на цьому сайті!
      </div>
      <div className="textForExit">
        Ви можете вийти зі свого облікового запису, натиснувши на цю кнопку.
      </div>
      <div className="box-btnExitAcount">
        <button className="btnExitAcount">Вийти</button>
      </div>
    </div>
  );
};

export default UserInfo;