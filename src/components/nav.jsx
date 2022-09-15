import React from "react";
import User from "../assets/user-white.svg";
import Deck from "../assets/deck-white.svg";
import Note from "../assets/notes-white.svg";
import Search from "../assets/search-white.svg";
export const Nav = () => {
  return (
    <div className="nav">
      <button>
        <img src={User} alt="user_page" />
      </button>
      <button>
        <img src={Deck} alt="deck_page" />
      </button>
      <button>
        <img src={Note} alt="add_note" />
      </button>
      <button>
        <img src={Search} alt="look_for_a_new_turth" />
      </button>
    </div>
  );
};
