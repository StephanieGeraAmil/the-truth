import axios from 'axios';
const backend_url="http://localhost:5500"

const verses_url= backend_url+"/verses";
export const fetchVerses=()=>axios.get(verses_url);
export const createVerse=(newVerse)=> axios.post(verses_url, newVerse);
export const updateVerse=(updatedVerse)=> axios.patch(`${verses_url}/${updatedVerse._id}`, updatedVerse);
export const deleteVerse=(deleteVerseId)=> axios.delete(`${verses_url}/${deleteVerseId}`);

const tags_url= backend_url+"/tags";
export const fetchTags=()=>axios.get(tags_url);
export const createTag=(newTag)=> axios.post(tags_url, newTag);
export const updateTag=(updatedTag)=> axios.patch(`${tags_url}/${updatedTag._id}`, updatedTag);
export const deleteTag=(deleteTagId)=> axios.delete(`${tags_url}/${deleteTagId}`);



const notes_url= backend_url+"/notes";
export const fetchNotes=()=>axios.get(notes_url);
export const createNote=(newNote)=> axios.post(notes_url, newNote);
export const updateNote=(updatedNote)=> axios.patch(`${notes_url}/${updatedNote._id}`, updatedNote);
export const deleteNote=(deleteNoteId)=> axios.delete(`${notes_url}/${deleteNoteId}`);


const decks_url= backend_url+"/decks";
export const fetchDecks=()=>axios.get(decks_url);
export const createDeck=(newDeck)=> axios.post(decks_url, newDeck);
export const updateDeck=(updatedDeck)=> axios.patch(`${decks_url}/${updatedDeck._id}`, updatedDeck);
export const deleteDeck=(deleteDeckId)=> axios.delete(`${decks_url}/${deleteDeckId}`);



const cards_url= backend_url+"/cards";
export const fetchCards=()=>axios.get(cards_url);
export const createCard=(newCard)=> axios.post(cards_url, newCard);
export const deleteCard=(deleteCardId)=> axios.delete(`${cards_url}/${deleteCardId}`);

const card_deck=backend_url+"/card_deck";
export const fetchCardsOfDeck=(deck)=> axios.get(`${card_deck}/${deck._id}`);
export const addCardToDeck=(cardToAdd,deck)=> axios.patch(`${card_deck}/${deck._id}`, cardToAdd);
export const removeCardFromDeck=(card,deck)=> axios.patch(`${card_deck}/${deck._id}`, card);

const verse_tag=backend_url+"/verse_tag";
export const fetchVersesOfTag=(tag)=> axios.get(`${verse_tag}/${tag._id}`);
export const addTagToVerse=(verseToAdd,tag)=> axios.patch(`${verse_tag}/${tag._id}`, verseToAdd);
export const removeTagFromVerse=(verse,tag)=> axios.patch(`${verse_tag}/${tag._id}`, verse);
const tag_verse=backend_url+"/tag_verse";
export const fetchTagsOfVerses=(verse)=> axios.get(`${tag_verse}/${verse._id}`);

const verse_card=backend_url+"/verse_card";
export const fetchVersesOfCard=(card)=> axios.get(`${verse_card}/${card._id}`);
export const addVerseToCard=(verseToAdd,card)=> axios.patch(`${verse_card}/${card._id}`, verseToAdd);
export const removeVerseFromCard=(verse,card)=> axios.patch(`${verse_card}/${card._id}`, verse);


