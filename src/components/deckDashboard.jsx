import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  createDeck,
  getDecksOfUser,
  updateDeck,
  deleteDeck,
} from "./../actions/deckActions.js";
//import { getAllCardsOfUser } from "../actions/cardActions";

import { PreviewDeck } from "./previewDeck";
import styled from "styled-components";
import { SubTitle } from "./shared_styles/styled_text";
import { StyledButton } from "./shared_styles/styled_buttons";
import { Plus, Remove, Edit, Save } from "./shared_styles/styled_icons";
import { FormTextArea } from "./shared_styles/styled_forms";
import { User } from "@auth0/auth0-react";
const StyledLink = styled(Link)`
  width: 100%;
  overflow: auto;
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

const ListItemStyled = styled.div`
  background-color: #1e1e1e;
  color:white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  margin: 20px;
  width: 250px;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6); 
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const DeckDashboardContainer = styled.div`
  display: flex;
  width:100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 60px auto;
  background-color: #121212; 
  @media (max-width: 600px) {
    justify-content: center;
  }

`;
export const DeckDashboard = () => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const userSelector = (state) => (state.user ? state.user : null);
  const user = useSelector(userSelector);

  const [displayNewDeckForm, setDisplayNewDeckForm] = useState(false);
  const [displayEditingDeckForm, setDisplayEditingDeckForm] = useState(null);
  const [deckName, setDeckName] = useState("");

  const handleClose = () => {
    setDisplayNewDeckForm(false);
    setDisplayEditingDeckForm(null);
    setDeckName("");
  };


  const handleSaveDeck = () => {
    if (displayEditingDeckForm) {
      const updatedDeck = { id: displayEditingDeckForm, name: deckName };
      dispatch(updateDeck(updatedDeck));
    } else {
      dispatch(createDeck({ name: deckName, userId: user.id }));
    }
    handleClose();
  };

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return (
    <DeckDashboardContainer>
      {decks.length > 0 ? (
        decks.map((element) => (
          <ListItemStyled key={element.id}>
            {(displayEditingDeckForm == element.id) ? (
              // <PreviewDeck>
              <>
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
                        handleSaveDeck();
                      }
                    }}
                  >
                    <Save $color />
                  </StyledButton>
                </ActionButtonsSection>
              </>
              // </PreviewDeck>
            ) : (


              <div id={element.id}>
                <StyledLink to={`../decks/${element.id}`}>
                  <SubTitle >{element.name}</SubTitle>
                </StyledLink>
                <ActionButtonsSection>
                  <StyledButton onClick={() => dispatch(deleteDeck(element.id))}>
                    <Remove $color />
                  </StyledButton>
                  <StyledButton onClick={() => setDisplayEditingDeckForm(element.id)}>
                    <Edit $color />
                  </StyledButton>
                </ActionButtonsSection>
              </div>
            )}
          </ListItemStyled>
        ))
      ) : (
        <p>User without decks yet</p>
      )}
      <ListItemStyled>
        {(displayNewDeckForm) ? (
          <div>
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
                    handleSaveDeck();
                  }
                }}
              >
                <Save $color />
              </StyledButton>
            </ActionButtonsSection>
          </div>
        ) : (
          <StyledButton $big onClick={() => setDisplayNewDeckForm(true)}>
            <Plus $big />
          </StyledButton>
        )}
      </ListItemStyled>
    </DeckDashboardContainer>
  );
};
