
import { Box } from './components/box';
import { Search } from './components/search';
import './App.css'

function App() {
  return (
    <div className="App">

        <div className='left'>
          <div className='icon-section'></div>
          <div className='title'>
              <h2>The</h2>    
              <h1>Truth</h1>
          </div>
          <div className='bottom'>
              <Search/>
              <button className='button-why'></button>
          </div>
        </div>
         <div className='right'>
        <Box/>
        </div>
        
       


    </div>
  );
}

export default App;
