import React from 'react';
import './App.css';
import Game from './components/game/game.js';
import homeTeamMascot from './assets/images/Hazelwood Husky.jpg';
import visitingTeamMascot from './assets/images/Parker Penguin.jpg';

function App() {
  const huskyTeam = {
    name: 'Hazelwood Huskies',
    logoSrc: homeTeamMascot
  }

  const penguinTeam = {
    name: 'Parker Penguins',
    logoSrc: visitingTeamMascot
  }
  
  return (
    <div className="App">
      <Game 
        venue="Husky Gym"
        homeTeam={huskyTeam}
        visitingTeam={penguinTeam}
      />
    </div>
  );
}

export default App;
