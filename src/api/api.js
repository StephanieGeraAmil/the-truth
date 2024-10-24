import axios from 'axios';
const backend_url=process.env.REACT_APP_BACKEND_URL;

const users_url= backend_url+"/users";
export const fetchUserByEmail=(user)=>axios.get(`${users_url}/${user.email}`); 



export const createUser=(newUser)=> axios.post(users_url, newUser);


const verses_url= backend_url+"/verses";
export const createVerse=(newVerse)=> axios.post(verses_url, newVerse);
export const updateVerse=(updatedVerseId, updatedVerse)=> axios.put(`${verses_url}/${updatedVerseId}`, updatedVerse);
export const deleteVerse=(deleteVerseId)=> axios.delete(`${verses_url}/${deleteVerseId}`);



const notes_url= backend_url+"/notes";
export const createNote=(newNote)=> axios.post(notes_url, newNote);
export const updateNote=(updatedNoteId,updatedNote )=> axios.put(`${notes_url}/${updatedNoteId}`, updatedNote);
export const deleteNote=(deleteNoteId)=> axios.delete(`${notes_url}/${deleteNoteId}`);

const decks_url= backend_url+"/decks";
export const fetchDecksByUserEmail=(user)=>axios.get(`${decks_url}/${user.email}`);
export const createDeck=(newDeck)=> axios.post(decks_url, newDeck);
export const updateDeck=(updatedDeckId, updatedDeck)=> axios.put(`${decks_url}/${updatedDeckId}`, updatedDeck);
export const deleteDeck=(deleteDeckId)=> axios.delete(`${decks_url}/${deleteDeckId}`);

const cards_url= backend_url+"/cards";
export const createCard=(newCard)=> axios.post(cards_url, newCard);
export const deleteCard=(deleteCardId)=> axios.delete(`${cards_url}/${deleteCardId}`);
