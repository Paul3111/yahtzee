import './App.css';
import Game from './Components/Game/JSX/Game';
import {
  useNavigate,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      
      <Route path="/game" element={<Game navigate={ useNavigate()} />} />
    </Routes>
    );
}


export default App;
