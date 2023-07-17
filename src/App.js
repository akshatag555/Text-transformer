import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import React from 'react'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null);
  const showalert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showalert('light mode','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('dark mode','success')
    }
  }
  return (
    <div >
      <BrowserRouter>
  <Navbar title="Text Transformer" about="AboutUs" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform   mode={mode} showalert={showalert} />}>
            </Route>
          </Routes>
        </div>
  </BrowserRouter>
   </div>
  )
}

export default App;
