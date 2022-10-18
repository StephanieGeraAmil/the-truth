import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import User from "../assets/user-white.svg";
import Log_out from "../assets/logout.svg";

export const Logout = () => {
    const { logout } = useAuth0();
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
      <img src={Log_out} alt="logout" />
    </button>
    )

}
