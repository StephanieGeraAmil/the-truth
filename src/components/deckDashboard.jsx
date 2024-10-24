import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  createDeck,
  getDecksOfUser,
  updateDeck,
  deleteDeck,
} from "./../actions/deckActions.js";

import { PreviewDeck } from "./previewDeck";
import styled from "styled-components";
import { DeckTitle, SubTitle } from "./shared_styles/styled_text";
import { StyledButton } from "./shared_styles/styled_buttons";
import { Plus, Remove, Edit, Save } from "./shared_styles/styled_icons";
import { FormTextArea } from "./shared_styles/styled_forms";
import { User } from "@auth0/auth0-react";



const PlusButton = styled.div`
  width:20%;
  height:160px;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 600px) {
    width: 100%;
  }`;

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
  gap: 1vh;
  z-index: 5;
`;

const ItemContent = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const ListItemStyled = styled.div`
  background-color: #1e1e1e;
  color:white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  margin: 0;
  width: 20vw;
  height:20vh;
  padding: 25px 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6); 
  }
  @media (max-width: 600px) {
    width: 100%;
    height:auto;
  }
`;
const TitleContainer = styled.div`
  width: 100%;
  height 22vh;
  margin-top:8vh;
  padding-left:8vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: #121212; 
`;

const DeckDashboardContainer = styled.div`
  width:100%;
  min-height:100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-auto-rows: 200px;
  row-gap: 5vh;
  column-gap: 2vw;
  padding: 5vh 8vw;
  background-color: #121212;
 
  @media (max-width: 600px) {
    grid-auto-rows: 160px;
    margin:auto;
    grid-template-columns: 1fr;
    padding: 8vh auto;
  }

`;
const DeckDashboardPage = styled.div`
  margin-top:-10vh;
  padding-top:10vh;
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
  <DeckDashboardPage>
    <TitleContainer>
      <SubTitle $big>Decks</SubTitle>
    </TitleContainer>
    <DeckDashboardContainer>

      {decks.length > 0 ? (
        decks.map((element) => (
          <ListItemStyled key={element.id}>
            {(displayEditingDeckForm == element.id) ? (
              <ItemContent>
                <FormTextArea
                  subtitle
                  placeholder="Deck title"
                  onChange={(e) => setDeckName(e.target.value)}
                  value={deckName}
                ></FormTextArea>
                <ActionButtonsSection>
                  <StyledButton onClick={() => handleClose()}>
                    <Remove />
                  </StyledButton>
                  <StyledButton
                    onClick={() => {
                      if (deckName !== "") {
                        handleSaveDeck();
                      }
                    }}
                  >
                    <Save />
                  </StyledButton>
                </ActionButtonsSection>
              </ItemContent>
            ) : (


              <ItemContent id={element.id}>
                <StyledLink to={`../decks/${element.id}`}>
                  <DeckTitle >{element.name}</DeckTitle>
                </StyledLink>
                <ActionButtonsSection>
                  <StyledButton onClick={() => { setDisplayEditingDeckForm(element.id); setDeckName(element.name); }}>
                    <Edit />
                  </StyledButton>
                  <StyledButton onClick={() => dispatch(deleteDeck(element.id))}>
                    <Remove />
                  </StyledButton>

                </ActionButtonsSection>
              </ItemContent>
            )}
          </ListItemStyled>
        ))
      ) : (
       <></>
      )}

      {(displayNewDeckForm) ? (
        <ListItemStyled>
          <ItemContent>
            <FormTextArea
              subtitle
              placeholder="Deck title"
              onChange={(e) => setDeckName(e.target.value)}
              value={deckName}
            ></FormTextArea>
            <ActionButtonsSection>
              <StyledButton onClick={() => handleClose()}>
                <Remove />
              </StyledButton>
              <StyledButton
                onClick={() => {
                  if (deckName !== "") {
                    handleSaveDeck();
                  }
                }}
              >
                <Save />
              </StyledButton>
            </ActionButtonsSection>
          </ItemContent>
        </ListItemStyled>
      ) : (
        <PlusButton>
          <StyledButton $big onClick={() => setDisplayNewDeckForm(true)}>
            <Plus $big />
          </StyledButton>
        </PlusButton>
      )}
    </DeckDashboardContainer>
  </DeckDashboardPage>
  );
};
