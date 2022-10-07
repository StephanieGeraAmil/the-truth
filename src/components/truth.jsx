import React, { useState, useEffect } from "react";
import { Verse } from "./verse";
import Plus from "../assets/plus.svg";

export const Truth = () => {
  const [saved, setSaved] = useState([]);
  useEffect(() => {
    setSaved([JSON.parse(localStorage.getItem("fear"))]);
  }, []);

  return (
    <div className="truth">
      <p>God says...</p>
      <div className="list_verses">
        {saved.map((element) => (
          <div className="verse_list_item" key={`${element.ref}_div`}>
            <Verse verse={element} />
            <button>
              <img src={Plus} alt="add_to_deck" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
