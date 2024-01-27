import { useState } from 'react';
import ContextProvierAllOver from "./context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomeWelcome from './pages/home';
import Journey from './pages/Journey';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {


  return (
    <BrowserRouter>
       <ContextProvierAllOver>
        <div>
          <Routes>
            <Route path="/">
              <Route index element={<Journey />} />
              <Route path="/explore" element={<HomeWelcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/*" element={<Journey />} />
              {/* <Route path="register" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </div>
       </ContextProvierAllOver>
    </BrowserRouter>
  )
}

export default App
