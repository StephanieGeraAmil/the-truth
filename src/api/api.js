import axios from 'axios';
const backend_url="http://localhost:5500"

const verses_url= backend_url+"/verses";
export const fetchVerses=()=>axios.get(verses_url);
export const createVerse=(newVerse)=> axios.post(verses_url, newVerse);
export const updateVerse=(updatedVerse)=> axios.patch(`${verses_url}/${updatedVerse._id}`, updatedVerse);
export const deleteVerse=(deleteVerseId)=> axios.delete(`${verses_url}/${deleteVerseId}`);
