import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import './AvatarMenu.css';
import { selectToken } from "../../redux/auth/authSelectors";
import AuthStatus from "../../constants/userRolesEnum";
import { setAuthSwitchToShow } from "../../redux/auth/authReducer";

const AvatarMenu = ({ isAvatarMenuOpen, setIsAvatarMenuOpen }) => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
  

  return (
    <div className={`avatar-menu ${isAvatarMenuOpen ? "openAvatarMenu" : ""}`}>
      {token === null ? (
        <div className="avatar-menu-list">
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/AuthorizationPage/SignIn"
            onClick={() => {
              setIsAvatarMenuOpen(false);
              dispatch(setAuthSwitchToShow(AuthStatus.LogIn));
            }}
          >
            Sign In
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/AuthorizationPage/SignUp"
            onClick={() => {
              setIsAvatarMenuOpen(false);
              dispatch(setAuthSwitchToShow(AuthStatus.LogUp));
            }}
          >
            Sign Up
          </NavLink>
        </div>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "text active" : "text")}
          to="/"
          onClick={() => {
            setIsAvatarMenuOpen(false);
            dispatch(setAuthSwitchToShow(AuthStatus.LogIn));
          }}
        >
         Log Out
        </NavLink>
      )}
    </div>
  );
};

export default AvatarMenu
