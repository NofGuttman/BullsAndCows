import React from 'react';
import Score from './Score';

const ScoreArea = ({listOfScores}) => {
  const scoreList = listOfScores.map((score) => {
    return (<Score score={score} />);
  })
  
  return(
    <div id="score-area">
      {scoreList.length > 0 ? scoreList : <h1>Make a Guess</h1>}
    </div>
  );
}

export default ScoreArea;