import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import User from "../assets/user-white.svg";
import Note from "../assets/notes-white.svg";

export const Logout = () => {
    const { logout } = useAuth0();
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
      <img src={Note} alt="logout" />
    </button>
    )
    //<button className="logout_button"  onClick={() => logout({ returnTo: window.location.origin })}></button>
}
