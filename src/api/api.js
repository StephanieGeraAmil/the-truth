import axios from 'axios';
const backend_url="http://localhost:5500"

const verses_url= backend_url+"/verses";
export const fetchVerses=()=>axios.get(verses_url);
export const createVerse=(newVerse)=> axios.post(verses_url, newVerse);
export const updateVerse=(updatedVerse)=> axios.patch(`${verses_url}/${updatedVerse._id}`, updatedVerse);
export const deleteVerse=(deleteVerseId)=> axios.delete(`${verses_url}/${deleteVerseId}`);

const verse_quote_url= backend_url+"/verse-quotes";
export const fetchVersesQuotes=()=>axios.get(verse_quote_url);
export const createVerseQuote=(newVerseQuote)=> axios.post(verse_quote_url, newVerseQuote);
export const updateVerseQuote=(updatedVerseQuote)=> axios.patch(`${verse_quote_url}/${updatedVerseQuote._id}`, updatedVerseQuote);
export const deleteVerseQuote=(deleteVerseQuoteId)=> axios.delete(`${verse_quote_url}/${deleteVerseQuoteId}`);



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
