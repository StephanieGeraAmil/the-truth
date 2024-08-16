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
import { Search } from "./components/search";
import { Deck } from "./components/deck";

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
    position: absolute;
    height: 200vh;
    width:100%;
    font-family: Inter, sans-serif;
    font-weight: 100;
    font-size:100%;
    margin: 0;
    background: #000;
          @media (min-aspect-ratio: 1.4) {
    height:260vh;
  }
     @media (min-width: 1400px) {
    height: 200vh;
  }
    @media (min-width: 1800px) {
    height: 220vh;
  }

    @media (max-width: 900px) {
    height: 280vh;
  }
   @media (max-width: 550px) {
    height: 260vh;
  }
  
  }
  textarea:focus, input:focus{
    outline: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Auth0Provider
          domain="dev-7pl37pty.us.auth0.com"
          clientId="vNXWfuyHWr4jF94dV51O4ZclSOpkA8Hw"
          redirectUri={process.env.REDIRECTION_URL || window.location.origin}
        > */}
        <Auth0Provider
          domain= {process.env.REACT_APP_AUTH0_DOMAIN}
          clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID}
          redirectUri= {`${window.location.origin}/decks`}
        >
          <GlobalStyle />
          <>
            <Nav />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/search" element={<Search />} />
              <Route path="/decks" element={<DeckDashboard />} />
              <Route path="/decks/:id" element={<Deck />} />
            </Routes>
          </>
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
