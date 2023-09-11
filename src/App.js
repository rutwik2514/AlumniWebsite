import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage';
import Login from './Components/Login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App