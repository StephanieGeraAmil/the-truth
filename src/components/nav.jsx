import React ,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import User from "../assets/user-white.svg";
import Deck from "../assets/deck-white.svg";
import Note from "../assets/notes-white.svg";
import Search from "../assets/search-white.svg";
import {Login} from "./login"
import {Logout} from "./logout"
import {getUserByEmail} from './../actions/userActions.js';
export const Nav = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const userLoggedSelector = (state) => (state.user ? state.user : null);
  const userLogged = useSelector(userLoggedSelector);

  useEffect(()=>{
             if(user)dispatch(getUserByEmail(user));   
  },[isAuthenticated]);
  return (
    <div className="nav">
      {!isAuthenticated ? (
        // <button>
        //   <img src={User} alt="user_page" />
        // </button>
        <Login/>
      ) : (
        <>
        <Logout/>
          <button>
            <img src={Deck} alt="deck_page" />
          </button>
          {/* <button>
            <img src={Note} alt="add_note" />
          </button> */}
        </>
      )}

      <button>
        <img src={Search} alt="look_for_a_new_turth" />
      </button>
    </div>
  );
};
