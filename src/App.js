import './App.css';
import Game from './Components/Game/JSX/Game';
import Home from './Components/Home/Home';
import Scoreboard from './Components/Scoreboard/JSX/Scoreboard';
import Settings from './Components/Settings/JSX/Settings';
import Signup from './Components/Signup/JSX/Signup';

import {
  useNavigate,
  Routes,
  Route,
  } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home navigate={ useNavigate()} />} />
      <Route path="/game" element={<Game navigate={ useNavigate()} />} />
      <Route path="/scoreboard" element={<Scoreboard navigate={ useNavigate()} />} />
      <Route path="/settings" element={<Settings navigate={ useNavigate()} />} />
      <Route path="/signup" element={<Signup navigate={ useNavigate()} />} />
    </Routes>
    );
}

export default App;
