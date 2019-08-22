//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //Home Score
  const [homeScore, setHomeScore] = useState(0);

  //Away Score
  const [awayScore, setAwayScore] = useState(0);

  const HomeScore = (value) => { setHomeScore(homeScore + value) }

  const AwayScore = (numbers) => { setAwayScore(awayScore + numbers) }

  return (
    <div className="container">

      <section className="scoreboard">

        <TopRow home = {homeScore} away = {awayScore} />

        <BottomRow />

      </section>

      <section className="buttons">
        
        <HomeButtons score = {HomeScore} />
        
        <AwayButtons score = {AwayScore} />

      </section>
    </div>
  );
}

export default App;
