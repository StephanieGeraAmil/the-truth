import axios from 'axios';
const backend_url="http://localhost:5500"

const users_url= backend_url+"/users";
export const fetchUserById=(user)=>axios.get(`${users_url}/${user}`);
export const createUser=(newUser)=> axios.post(users_url, newUser);
export const updateUser=(updatedUser)=> axios.patch(`${users_url}/${updatedUser.id}`, updatedUser);
export const deleteUser=(deleteUserId)=> axios.delete(`${users_url}/${deleteUserId}`);

const verses_url= backend_url+"/verses";
// export const fetchVerses=()=>axios.get(verses_url);
export const createVerse=(newVerse)=> axios.post(verses_url, newVerse);
export const updateVerse=(updatedVerse)=> axios.patch(`${verses_url}/${updatedVerse.id}`, updatedVerse);
export const deleteVerse=(deleteVerseId)=> axios.delete(`${verses_url}/${deleteVerseId}`);

const tags_url= backend_url+"/tags";
// export const fetchTags=()=>axios.get(tags_url);
export const createTag=(newTag)=> axios.post(tags_url, newTag);
export const updateTag=(updatedTag)=> axios.patch(`${tags_url}/${updatedTag.id}`, updatedTag);
export const deleteTag=(deleteTagId)=> axios.delete(`${tags_url}/${deleteTagId}`);

const notes_url= backend_url+"/notes";
// export const fetchNotes=()=>axios.get(notes_url);
export const createNote=(newNote)=> axios.post(notes_url, newNote);
export const updateNote=(updatedNote)=> axios.patch(`${notes_url}/${updatedNote.id}`, updatedNote);
export const deleteNote=(deleteNoteId)=> axios.delete(`${notes_url}/${deleteNoteId}`);

const decks_url= backend_url+"/decks";
// export const fetchDecks=()=>axios.get(decks_url);

export const createDeck=(newDeck)=> axios.post(decks_url, newDeck);
export const updateDeck=(updatedDeck)=> axios.patch(`${decks_url}/${updatedDeck.id}`, updatedDeck);
export const deleteDeck=(deleteDeckId)=> axios.delete(`${decks_url}/${deleteDeckId}`);

const cards_url= backend_url+"/cards";
// export const fetchCards=()=>axios.get(cards_url);
export const createCard=(newCard)=> axios.post(cards_url, newCard);
export const deleteCard=(deleteCardId)=> axios.delete(`${cards_url}/${deleteCardId}`);

const card_deck_url=backend_url+"/card_deck";
export const fetchCardsOfDeck=(deck)=> axios.get(`${card_deck_url}/${deck.id}`);
export const addCardToDeck=(cardToAdd,deck)=> axios.patch(`${card_deck_url}/${deck.id}`, cardToAdd);
export const removeCardFromDeck=(card,deck)=> axios.patch(`${card_deck_url}/${deck.id}`, card);

const verse_tag_url=backend_url+"/verse_tag";
export const fetchVersesOfTag=(tag)=> axios.get(`${verse_tag_url}/${tag.id}`);
export const addTagToVerse=(verseToAdd,tag)=> axios.patch(`${verse_tag_url}/${tag.id}`, verseToAdd);
export const removeTagFromVerse=(verse,tag)=> axios.patch(`${verse_tag_url}/${tag.id}`, verse);
const tag_verse_url=backend_url+"/tag_verse";
export const fetchTagsOfVerses=(verse)=> axios.get(`${tag_verse_url}/${verse.id}`);

const verse_card_url=backend_url+"/verse_card";
export const fetchVersesOfCard=(card)=> axios.get(`${verse_card_url}/${card.id}`);
export const addVerseToCard=(verseToAdd,card)=> axios.patch(`${verse_card_url}/${card.id}`, verseToAdd);
export const removeVerseFromCard=(verse,card)=> axios.patch(`${verse_card_url}/${card.id}`, verse);

const deck_user_url=backend_url+"/deck_user";
export const fetchDecksOfUser=(user)=>axios.get(`${deck_user_url}/${user}`);
