import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers.js";
import { Auth0Provider } from "@auth0/auth0-react";

import { Nav } from "./components/nav";
import App from "./App";
import { DeckDashboard } from "./components/deckDashboard";
import { Deck } from "./components/deck";
import { NewDeck } from "./components/newDeck";

import { createGlobalStyle } from "styled-components";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: Montserrat, sans-serif;
    font-weight: 100;
    margin: 0;
      background: #0D0C3C;
  }
  textarea:focus, input:focus{
    outline: none;
  }
`;


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-7pl37pty.us.auth0.com"
          clientId="vNXWfuyHWr4jF94dV51O4ZclSOpkA8Hw"
          redirectUri={process.env.REDIRECTION_URL || window.location.origin}
        >
          <GlobalStyle />
          <>
          <Nav/>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/decks" element={<DeckDashboard />} />
            <Route path="/newdeck" element={<NewDeck />} />
            <Route path="/decks/:id" element={<Deck />} />
          </Routes>
          </>
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
