import './App.css';
// import FirstPopUp from './Components/FirstPopUp/JSX/FirstPopUp';
import Game from './Components/Game/JSX/Game';
import Home from './Components/Home/Home';
import Leaderboard from './Components/Leaderboard/JSX/Leaderboard';
import Settings from './Components/Settings/JSX/Settings';
import Signup from './Components/Signup/JSX/Signup';

import { useState, useEffect } from 'react';

import {
  useNavigate,
  Routes,
  Route,
  } from "react-router-dom";

const App = () => {
  const [showSavePopUp, setShowSavePopUp] = useState(false)

  const savingData = () => {
    setShowSavePopUp(!showSavePopUp)
  }

  useEffect(() => {
    console.log('SAVING', showSavePopUp)
  }, [showSavePopUp])

  return (
    <Routes>
      <Route path="/home" element={<Home navigate={ useNavigate()} />} />
      <Route path="/game" element={<Game savingData={savingData} navigate={ useNavigate()} />} />
      <Route path="/leaderboard" element={<Leaderboard showSavePopUp={showSavePopUp} savingData={savingData} navigate={ useNavigate()} />} />      
      <Route path="/settings" element={<Settings navigate={ useNavigate()} />} />
      <Route path="/signup" element={<Signup navigate={ useNavigate()} />} />
    </Routes>
    );
}

export default App;
