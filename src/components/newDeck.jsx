import React ,{useState}from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDeck } from "../actions/deckActions";
import Done from "../assets/done.svg";
import Delete from "../assets/delete.svg";

import styled, { css } from "styled-components";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { StyledLink } from "./shared_styles/styled_buttons";

export const NewDeck = () => {
   const dispatch = useDispatch();
     const userLoggedSelector = (state) => (state.user ? state.user : null);
  const userLogged = useSelector(userLoggedSelector);
 
     const [deckName,setDeckName]=useState("");
  return (
   <Form little>
         <StyledLink white topRight to={`/decks/`} > <img src={Delete} alt="esc" /></StyledLink>
        <FormInput placeholder='Add the deck title here' onChange={(e)=>setDeckName(e.target.value)} value={deckName}>
        </FormInput>
        <StyledLink white bottomRight to={`/decks/`} onClick={()=> dispatch(createDeck({name:deckName, UserId:userLogged.id}))}> <img src={Done} alt="add_deck" /></StyledLink>

      
    </Form>
  )
}
