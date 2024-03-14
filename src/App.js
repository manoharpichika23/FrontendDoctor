import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctor from './Doctor';
import Patient from './Patient';
import Home from './Home';
import Navigate from './Navigate';
import './App.css';

function App(){
  
   return(
    <BrowserRouter>
      <Navigate/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctor/>} />
        <Route path="/patients" element={<Patient/>} />
      </Routes>
    </BrowserRouter>
   )
  }

export default App;