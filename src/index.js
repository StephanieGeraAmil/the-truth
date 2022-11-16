import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
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
import { NewDeck } from "./components/newDeck";
import  { createGlobalStyle } from "styled-components";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
      font-size: inherit;
      font-weight: inherit;
      font-family: inherit;
      color: inherit;
  }

  a {
    text-decoration: none;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    margin: 0;
  }
  #root {
  height: 100%;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-7pl37pty.us.auth0.com"
          clientId="vNXWfuyHWr4jF94dV51O4ZclSOpkA8Hw"
          redirectUri="https://stephaniegeraamil.github.io/the-truth"
        >
            <GlobalStyle />
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<App />}>
              {" "}
            </Route>
            <Route path="/decks" element={<DeckDashboard />}>
              {" "}
            </Route>
            <Route path="/newdeck" element={<NewDeck />}>
              {" "}
            </Route>
            <Route path="/decks/:id" element={<Deck />} />
          </Routes>
        </Auth0Provider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
