import React from 'react';
import Score from './Score';
import Button from './Button'

const ScoreArea = ({listOfScores, clickHandler}) => {
  const scoreList = listOfScores.map((score) => {
    return (<Score score={score} />);
  })
  
  return(
    <div id="score-area">
      {scoreList.length > 0 ? scoreList : <h1>Make a Guess</h1>}
      <Button style="game-button red-btn" clickHandler={clickHandler} text="Restart Game" />
    </div>
  );
}

export default ScoreArea;