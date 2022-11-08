import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import User from "../assets/user-white.svg";

import { NavLink } from "./shared_styles/styled_buttons";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <NavLink onClick={() => loginWithRedirect()}>
      <img src={User} alt="login" />
    </NavLink>
  );
};
