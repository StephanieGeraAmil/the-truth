import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Verse } from "./verse";


export const Truth = () => {
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesOfTag = useSelector(versesSelector);

  useEffect(() => {

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
