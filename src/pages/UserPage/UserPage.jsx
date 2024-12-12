import React from 'react'
import './UserPage.css';
import { useSelector } from "react-redux";
import { selectUser } from '../../redux/auth/authSelectors';

const UserPage = () => {
  const currentUser = useSelector(selectUser);

  return (
    <div className="containerUserPage">
      xxx
      <div className="textUserPage">
        it's your page {currentUser?.login ? `, ${currentUser.login}` : ""}
      </div>
    </div>
  );
}

export default UserPage
