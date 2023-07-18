import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  createDeck,
  getDecksOfUser,
  deleteDeck,
} from "./../actions/deckActions.js";
import { getAllCardsOfUser } from "../actions/cardActions";

import { PreviewDeck } from "./previewDeck";
import styled from "styled-components";
import { SubTitle } from "./shared_styles/styled_text";
import { StyledButton } from "./shared_styles/styled_buttons";
import { Plus, Remove, Save } from "./shared_styles/styled_icons";
import { FormTextArea } from "./shared_styles/styled_forms";
const StyledLink = styled(Link)`
  width: 100%;
  overflow: auto;
`;

const ListItemStyled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ActionButtonsSection = styled.div`
  align-self: flex-end;
  width: 100%;
  height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2vh;
  z-index: 5;
`;

const DeckDashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10% 5%;
  overflow: auto;
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(auto-fill, minmax(45vh, 1fr));
  grid-auto-rows: 50vh;
  background-image: radial-gradient(
    circle farthest-corner at 0% 0%,
    #000 0%,
    #15464c 70%,
    #33abb9 100%
  );

  @media (max-aspect-ratio: 1.2) {
    grid-template-columns: repeat(auto-fill, minmax(35vh, 1fr));
    grid-gap: 0%;
  }
  @media (max-aspect-ratio: 0.78) {
    padding-top: 35%;
    grid-gap: 10%;
  }

  @media (max-width: 750px) {
    padding-top: 25%;
    grid-auto-rows: 30vh;
    grid-gap: 5%;
  }
  @media (max-width: 550px) {
    padding-top: 20%;
    grid-auto-rows: 25vh;
    grid-gap: 5%;
  }
  @media (max-aspect-ratio: 1.2) {
    grid-template-columns: repeat(auto-fill, minmax(35vh, 1fr));
    grid-gap: 0%;
  }
  @media (max-aspect-ratio: 0.78) {
    padding-top: 35%;
    grid-auto-rows: 20vh;
    grid-gap: 8%;
  }
`;
export const DeckDashboard = () => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);

  const [displayNewDeckForm, setDisplayNewDeckForm] = useState(false);
  const [deckName, setDeckName] = useState("");

  const handleClose = () => {
    setDisplayNewDeckForm(false);
    setDeckName("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (decks.length === 0) {
      dispatch(getDecksOfUser("notUserYet"));
    }
    if (cards.length === 0) {
      dispatch(getAllCardsOfUser("notUserYet"));
    }
  }, []);
  return (
    <DeckDashboardContainer>
      {decks.length > 0 ? (
        decks.map((element) => (
          <ListItemStyled key={element.id}>
            <PreviewDeck id={element.id}>
              <StyledLink to={`../decks/${element.id}`}>
                <SubTitle $color>{element.name}</SubTitle>
              </StyledLink>
              <ActionButtonsSection>
                <StyledButton onClick={() => dispatch(deleteDeck(element.id))}>
                  <Remove $color />
                </StyledButton>
              </ActionButtonsSection>
            </PreviewDeck>
          </ListItemStyled>
        ))
      ) : (
        <p>User without decks yet</p>
      )}
      <ListItemStyled>
        {displayNewDeckForm ? (
          <PreviewDeck>
            <FormTextArea
              subtitle
              placeholder="Deck title"
              onChange={(e) => setDeckName(e.target.value)}
              value={deckName}
            ></FormTextArea>
            <ActionButtonsSection>
              <StyledButton onClick={() => handleClose()}>
                <Remove $color />
              </StyledButton>
              <StyledButton
                onClick={() => {
                  if (deckName !== "") {
                    dispatch(createDeck(deckName));
                    setDisplayNewDeckForm(false);
                  }
                }}
              >
                <Save $color />
              </StyledButton>
            </ActionButtonsSection>
          </PreviewDeck>
        ) : (
          <StyledButton $big onClick={() => setDisplayNewDeckForm(true)}>
            <Plus $big />
          </StyledButton>
        )}
      </ListItemStyled>
    </DeckDashboardContainer>
  );
};
