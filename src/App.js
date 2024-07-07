import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
function App() {
  const [mode,setmode]= useState('light');
  
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor('black');
    }
    else{
      setmode('light')
      document.body.style.backgroundColor('white');
    }
  }

  return (
  <> 
  <Navbar title="Text Formatter" abouttext="About Us" mode={mode} togglemode={togglemode}/>
  <div className="container">
    <TextForm heading="Enter Text for formatting" result="Your Formatted Text" mode={mode}/>
    <About/>
  </div>
  </>
    
  );
}

export default App;
