import React, { useState, useEffect } from "react";

export const DeckDashboard = () => {
       const [decks, setDecks] = useState([]);
  useEffect(() => {
    setDecks(Object.keys(localStorage));
  }, []);
  return (
    <div className="deck_dashboard">
    {decks && decks.map((element)=>(
        <div className="deck_preview " name={element} key={element+"deck"}></div>
            // <Deck className="deck_preview" name={element} key={element+"deck"}></Deck>
        )
    )}
    </div>
  )
}
