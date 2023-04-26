import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Players from './components/players/Players';

function App() {
  return (
    <Router>
      <BrowserRouter>
        <Route path="/players">
          <Players />
        </Route>
      </BrowserRouter>
    </Router>
  );
}

export default App;
