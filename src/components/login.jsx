import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import User from "../assets/user-white.svg";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button  className="nav_button" onClick={() => loginWithRedirect()}>
      <img src={User} alt="login" />
    </button>

  );
};
