import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "../actions/tagActions";
import { Hint } from "./hint";

export const HintList = () => {
  const tagsSelector = (state) => (state.tags ? state.tags : null);
  const tags = useSelector(tagsSelector);
  const thoughtsSelector = (state) => (state.thoughts ? state.thoughts : null);
  const thoughts = useSelector(thoughtsSelector);
  let hints = [];
  if (tags) hints = [...tags];
  if (thoughts) hints = [...hints, ...thoughts];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTags());
  }, []);
  useEffect(() => {
    console.log("hints");

    console.log(hints);
  }, [tags]);

  return (
    <div className="hint_section">
      <div className="hint_list">
        {hints.map((element) => (
          <Hint hint={element} key={element.id}></Hint>
        ))}
      </div>
    </div>
  );
};
