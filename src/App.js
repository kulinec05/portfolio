import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {motion} from 'framer-motion'

function App() {
  const [isVisible,setIsVisible] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p  onClick={()=>setIsVisible(!isVisible)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div animate={{opacity:isVisible? 0.5 : 1}}>
            dasdas
            </motion.div>
        </a>
      </header>
    </div>
  );
}

export default App;
