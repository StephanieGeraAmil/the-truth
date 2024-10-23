import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import {LoginOutlined } from '@mui/icons-material';
// import { IconButton } from "@mui/material/";
import { ColorAndTextButton, StyledLink } from "../shared_styles/styled_buttons";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledLink
    // <ColorAndTextButton
      // <IconButton
      aria-label="login"
      onClick={(e) => {
        loginWithRedirect();
      }}
    >
      Login
      {/* <LoginOutlined /> */}
      {/* </IconButton> */}
    {/* </ColorAndTextButton> */}
    </StyledLink>
  );
};
