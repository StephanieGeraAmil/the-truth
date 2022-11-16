import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import User from "../assets/user-white.svg";
import Log_out from "../assets/logout.svg";
import { unSetUser } from "./../actions/userActions.js";

import { StyledLink } from "./shared_styles/styled_buttons";

export const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(unSetUser());
   // logout({ returnTo: window.location.origin });
logout({ returnTo:"https://stephaniegeraamil.github.io/the-truth/" });
  
  };
  const { logout } = useAuth0();
  return (
    <StyledLink className="nav_button" onClick={() => handleLogout()}>
      <img src={Log_out} alt="logout" />
    </StyledLink>
  );
};
