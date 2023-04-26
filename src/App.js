import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Players from './components/players/Players';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/players" element={<Players />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
