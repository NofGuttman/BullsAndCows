import React from 'react';
import Digit from './Digit';
import colorList from '../colorList';

const Score = ({score}) => {
  
  const visualCode = score.guess.map((digit) => {
    return(<Digit key={Math.random()} value={digit} />);
  });

  const bullsAndCows = [];
  for(let i = 0; i < score.score.bulls; i++){
    bullsAndCows.push(<div key={bullsAndCows.length} className="bull-score"></div>);
  }
  for(let i = 0; i < score.score.cows; i++){
    bullsAndCows.push(<div key={bullsAndCows.length} className="cow-score"></div>);
  }
  while(bullsAndCows.length < 4){
    bullsAndCows.push(<div key={bullsAndCows.length} className="no-score"></div>);
  }

  
  return(
    <div className="guess">
      <div className="score-area-guess">
        {visualCode}
      </div>
      <div className="score-area-score">
        {bullsAndCows}
      </div>
    </div>
  );
}

export default Score;