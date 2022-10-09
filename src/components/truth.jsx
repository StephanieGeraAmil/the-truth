import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Verse } from "./verse";
import Plus from "../assets/plus.svg";
import{ getVersesWithTag }from '../actions/tagActions'

export const Truth = () => {
    // const versesSelector=(state) =>(state.versesOfTag ? state.versesOfTag :null);
    // const versesOfTag = useSelector(versesSelector);
        const dispatch= useDispatch();

  const [saved, setSaved] = useState([]);
  useEffect(() => {
    const t ={id:"531f0c86-2fb5-49bc-b898-765ad464d0c7"};
     dispatch(getVersesWithTag(t));
    
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
