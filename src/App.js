
import { Box } from './components/box';
import { Search } from './components/search';
import './App.css'

function App() {
  return (
    <div className="App">

        <div className='left'>
         
              <div className='icon-section'>
                     <button className="login_button"></button>
                    <button className="notes_button"></button>
            
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
