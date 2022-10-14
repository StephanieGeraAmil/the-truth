import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { hintSelected } from "../actions/currentSelectionActions";

export const Hint = ({hint}) => {
    const dispatch = useDispatch();

  // useEffect(() => {
  //  console.log(hint)
  // }, []);
  return (
    <p onClick={()=> dispatch(hintSelected(hint))}>{hint.name}</p>
  )
}
