import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { StyledLink } from "../shared_styles/styled_buttons";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledLink
      aria-label="login"
      onClick={(e) => {
        loginWithRedirect();
      }}
    >
      Login
    </StyledLink>
  );
};
