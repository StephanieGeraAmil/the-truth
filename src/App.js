import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllThoughts } from "./actions/thoughtActions";

import { TopSection } from "./components/topSection";
import { BottomSection } from "./components/bottomSection";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("The backend is not yet deployed");
    dispatch(getAllThoughts());
  }, []);

  return (
    <div>
      <TopSection />
      <BottomSection />
    </div>
  );
}

export default App;
