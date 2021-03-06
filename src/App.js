
import { Box } from './components/box';
import { Search } from './components/search';
import './App.css'
import { Login } from './components/login';
import { Logout } from './components/logout';
import { UserInfo } from './components/userInfo';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getVerses} from './actions/verseActions.js'
import {getNotes} from './actions/noteActions.js'
import {getDecks} from './actions/deckActions.js'




function App() {
   const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getVerses());
      dispatch(getDecks());
        dispatch(getNotes());
  
    },[]);
   const {isAuthenticated } = useAuth0();
  return (
    <div className="App">

        <div className='left'>
         
              <div className='icon-section'>
                   {!isAuthenticated && (<Login/>)}
                     {isAuthenticated && (
                       <>
                         
                          <button className="notes_button"></button>
                         
                       </>
                     )}

                     <div className='user-section'>
                 
                     {isAuthenticated && (
                       <>
                          <UserInfo/>
                           <Logout/>
                       </>
                     )}
            
              </div>
            
              </div>
                 

              <div className='title'>
                  <h2>The</h2>    
                  <h1>Truth</h1>
              </div>
               <div className='bottom'>
                    <Search/>
                    <button className='button-why'>Why</button>
              </div>
         
         
        </div>
         <div className='right'>
             <Box/>
        </div>
         
    </div>
  );
}

export default App;
