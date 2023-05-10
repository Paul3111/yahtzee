import './App.css';
import Game from './Components/Game/JSX/Game';
import Multiplayer from './Components/Multiplayer/JSX/Multiplayer';
import Home from './Components/Home/Home';
import Leaderboard from './Components/Leaderboard/JSX/Leaderboard';
import Settings from './Components/Settings/JSX/Settings';
import Signup from './Components/Signup/JSX/Signup';

import { useState } from 'react';

import {
  useNavigate,
  Routes,
  Route,
  } from "react-router-dom";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home navigate={ useNavigate()} />} />
      <Route path="/home" element={<Home navigate={ useNavigate()} />} />
      <Route path="/game" element={<Game navigate={ useNavigate()} />} />
      <Route path="/multiplayer" element={<Multiplayer navigate={ useNavigate()}/>} />
      <Route path="/leaderboard" element={<Leaderboard navigate={ useNavigate()} />} />      
      <Route path="/settings" element={<Settings navigate={ useNavigate()} />} />
      <Route path="/signup" element={<Signup navigate={ useNavigate()} />} />
    </Routes>
    );
}

export default App;
