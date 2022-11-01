import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVerseToCard } from "../actions/verseActions";

export const NewVerse = ({card_id, updateFormShown}) => {
  const dispatch = useDispatch();


  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verseNumber, setVerseNumber] = useState("");
    const [scripture, setScripture] = useState("");
  const [display, setDisplay] = useState(true);

   const addVerse=()=>{
    dispatch(addVerseToCard({book:book, chapter: +chapter, verse_number:+verseNumber, version: "NTV", scripture:scripture},card_id));
    updateFormShown(null);
    setDisplay(false);
  }
  

  return (
<>
      {display && (
        <div >
          <input
            onChange={(event) => setBook(event.target.value)}
            value={book}
          ></input>
           <input
            onChange={(event) => setChapter(event.target.value)}
            value={chapter}
          ></input>
           <input
            onChange={(event) => setVerseNumber(event.target.value)}
            value={verseNumber}
          ></input>
             <textarea
            onChange={(event) => setScripture(event.target.value)}
            value={scripture}
          ></textarea>

              <button onClick={()=>addVerse()}>Save</button>
        </div>
      )}
    </>
  );
};
