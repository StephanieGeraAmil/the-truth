import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Verse } from "./verse";
// import Plus from "../assets/plus.svg";
import { getVersesWithTag } from "../actions/verseActions";

export const Truth = () => {
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesOfTag = useSelector(versesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const t = "531f0c86-2fb5-49bc-b898-765ad464d0c7";
    dispatch(getVersesWithTag(t));
  }, []);

  return (
    <div className="truth">
      <p>God says...</p>
      <div className="list_verses">
        {versesOfTag.map((element) => (
            <Verse verse={element} key={`${element.id}_div`} />
        ))}
      </div>
    </div>
  );
};
