import React, { useEffect } from 'react'
import './UserPage.css';
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from '../../redux/auth/authSelectors';
import { setAuthSwitchToShow } from '../../redux/auth/authReducer';
import AuthStatus from "../../constants/userRolesEnum";

const UserPage = () => {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthSwitchToShow(AuthStatus.LogOut));
   })
  
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
