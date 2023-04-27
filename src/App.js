import './App.css';
import Game from './Components/Game/JSX/Game';
import Home from './Components/Home/Home';
import {
  useNavigate,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home navigate={ useNavigate()} />} />
      <Route path="/game" element={<Game navigate={ useNavigate()} />} />
    </Routes>
    );
}

export default App;
