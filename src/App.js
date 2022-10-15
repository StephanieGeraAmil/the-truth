import React, { useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { getAllTags } from "./actions/tagActions";
import { Lie } from "./components/lie";
import { Truth } from "./components/truth";
import { Nav } from "./components/nav";
import "./App.css";
import { DeckDashboard } from "./components/deckDashboard";
import { NewNote } from "./components/newNote";
import { NewDeck } from "./components/newDeck";
import { HintList } from "./components/hintList";


function App() {
   const dispatch = useDispatch();
  // const selectedSelector = (state) => (state.selected ? state.selected : null);
  // const selected = useSelector(selectedSelector);
    useEffect(() => {
    dispatch(getAllTags());

  }, []);

  return (
    <div className="App">
      <Nav></Nav>
  {/* <NewNote></NewNote> */}
    {/* <NewDeck></NewDeck> */}
     {/* <DeckDashboard></DeckDashboard> */}
        <Lie></Lie>
        {/* {selected.hint?<Truth></Truth>: <HintList></HintList>} */}
       <Truth></Truth>
         {/* <div className="videos_list"></div>
         <div className="books_list"></div>  */}
     
    </div>
  );
}

export default App;



  // useEffect(() => {
    // localStorage.setItem(
    //   "ugly",
    //   JSON.stringify({
    //     ref: "psalms 139:14",
    //     verse:
    //       "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.",
    //   })
    // );
    // localStorage.setItem(
    //   "fear",
    //   JSON.stringify({
    //     ref: "philippians 4:6-7",
    //     verse:
    //       "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus..",
    //   })
    // );
    // localStorage.setItem(
    //   "uncapable",
    //   JSON.stringify({
    //     ref: "philippians 4:13",
    //     verse: "I can do all things through Christ which strengtheneth me.",
    //   })
    // );
    // localStorage.setItem(
    //   "not enough",
    //   JSON.stringify({
    //     ref: "2 peter 1:3",
    //     verse:
    //       "His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.",
    //   })
    // );
    // localStorage.setItem(
    //   "lazy",
    //   JSON.stringify({
    //     ref: "galatians 6:7-8",
    //     verse:
    //       "Do not be fooled. You cannot fool God. A man will get back whatever he plants! 8 If a man does things to please his sinful old self, his soul will be lost. If a man does things to please the Holy Spirit, he will have life that lasts forever.",
    //   })
    // );
    // localStorage.setItem(
    //   "unsure",
    //   JSON.stringify({
    //     ref: "proverbs 3:5-6",
    //     verse:
    //       "Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.",
    //   })
    // );
  // }, []);
