import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import { Button } from "@mui/material";
import { ColorAndTextButton } from "../shared_styles/styled_buttons";

export const LoginButton = ({text}) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <ColorAndTextButton
      onClick={(e) => {
        loginWithRedirect();
      }}
      sx={{
        mt: "4%",
        // width:{ sm:'15vw'}, 
        // height: { sm:'4vw'}, 
        fontSize: {xs: '0.7rem',sm: "1.5vw"},  
        color:"#fff",
      
        fontFamily: 'PT Sans, sans-serif',
      }}
      variant="contained"
    >
     {text}
    </ColorAndTextButton>
  );
};
