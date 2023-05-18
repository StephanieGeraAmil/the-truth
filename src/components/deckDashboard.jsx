import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecksOfUser, deleteDeck } from "./../actions/deckActions.js";
import { getAllCardsOfUser } from "../actions/cardActions";
import { settingFormPurpose } from "../actions/currentSelectionActions.js";
import { NewDeck } from "./newDeck";

import styled from "styled-components";
import { SubTitle } from "./shared_styles/styled_text";
import { StyledLink, StyledButton } from "./shared_styles/styled_buttons";
import { MdDelete } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
const FormContainer = styled.div`
  position: relative;
  width: 40vh;
  height: 40vh;
  display:flex;
  justify-content: center;
  align-items:flex-start;
`;
const StyledSubTitle = styled(SubTitle)`
  font-size: 2rem;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 2em;
  }
  @media (min-width: 1000px) {
    font-size: 2.5vw;
  }
  @media (min-width: 2000px) {
    font-size: 2vw;
  }
`;

const DeckListContainer = styled.div`
  padding: 10vh;
  width: 100%;
  height: 92%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  z-index: 0;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 95%;
    padding: 1vh;
    gap: 10vw;
  }
`;
const DeckPreviewContainer = styled.div`
  height: 30vh;
  width: 40vh;
  border-radius: 2vh;
  box-shadow: 2px 2px 7px #595959;
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    height: inherit;
    width: 100%;
    border-radius: 2vh;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -1vh;
    top: 1vh;
    z-index: -1;
    content: "";
    background-color: #fff;
  }
  &:before {
    height: inherit;
    width: 100%;
    border-radius: 2vh;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -2vh;
    top: 2vh;
    z-index: -2;
    content: "";
    background-color: #fff;
  }
  @media (max-width: 500px) {
    height: 40vh;
    width: 90%;
    margin: auto;
  }
`;
const DeckDashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: -20;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    height: 300vh;
  }
`;
export const DeckDashboard = () => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);
  const currentFormSelected = (state) =>
    state.selected.form ? state.selected.form : null;
  const formSelected = useSelector(currentFormSelected);

  const removeDeck = (deck) => {
    dispatch(deleteDeck(deck.id));
  };
  useEffect(() => {
    if (decks.length === 0) {
      dispatch(getDecksOfUser("notUserYet"));
    }
    if (cards.length === 0) {
      dispatch(getAllCardsOfUser("notUserYet"));
    }
  }, []);
  return (
    <DeckDashboardContainer>
      <DeckListContainer>
        {decks.length > 0 ? (
          decks.map((element) => (
            <div key={element.name + "deck"}>
              <DeckPreviewContainer>
                <StyledLink to={`../decks/${element.id}`}>
                  <StyledSubTitle>{element.name}</StyledSubTitle>
                </StyledLink>
                <StyledButton transparent onClick={() => removeDeck(element)}>
                  <MdDelete
                    style={{
                      position: "absolute",
                      top: "2vh",
                      right: "2vh",
                      color: "#6096BA",
                      fontSize: "3vh",
                    }}
                  />
                </StyledButton>
              </DeckPreviewContainer>
            </div>
          ))
        ) : (
          <p>User without decks yet</p>
        )}
        <FormContainer>
          {formSelected == "New Deck" && <NewDeck />}
          <StyledButton
            transparent
            onClick={() => dispatch(settingFormPurpose("New Deck"))}
          >
            <FiPlusCircle style={{ color: "#8B8C89", fontSize: "3vh" }} />
          </StyledButton>
        </FormContainer>
      </DeckListContainer>
    </DeckDashboardContainer>
  );
};
