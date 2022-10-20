import React, { useEffect } from "react";
import Plus from "../assets/plus.svg";

export const Verse = ({ verse }) => {
  useEffect(() => {}, []);
  return (
    <div className="verse_list_item" >
      <div className="verse">
        <p>{verse.scripture}</p>
        <p className="ref">
          {verse.book.charAt(0).toUpperCase() +
            verse.book.slice(1) +
            " " +
            verse.chapter +
            ":" +
            verse.verse_number}
        </p>
      </div>
      <button className="page_button"> 
        <img src={Plus} alt="add_to_deck" />
      </button>
    </div>
  );
};
