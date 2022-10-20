import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./fonts/magnolia_sky.ttf";
import "./fonts/SulphurPoint-Regular.ttf";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers.js";
import { DeckDashboard } from "./components/deckDashboard";
import { Deck } from "./components/deck";
import { Nav } from "./components/nav";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-7pl37pty.us.auth0.com"
          clientId="vNXWfuyHWr4jF94dV51O4ZclSOpkA8Hw"
          redirectUri={window.location.origin}
        >
            <Nav></Nav>
          <Routes>
            <Route path="/" element={<App />}>
              {" "}
            </Route>
            <Route path="/decks" element={<DeckDashboard />}>
              {" "}
            </Route>
            <Route path="/decks/:id" element={<Deck />} />
          </Routes>
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
