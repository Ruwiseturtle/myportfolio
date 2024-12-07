import React from 'react';
import './UserInfo.css';

const UserInfo = ({ user}) => {
  return (
    <div className="containerUserInfo">
      <div className="boxGreeting">
        Hello {user.login}! I'm very glad you registered on this page!
      </div>
      <div className="textForExit">
        You can log out of your account by clicking on this button
      </div>
      <div className="box-btnExitAcount">
        <button className="btnExitAcount">Exit</button>
      </div>
    </div>
  );
}

export default UserInfo
