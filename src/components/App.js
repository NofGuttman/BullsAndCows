import React from 'react';
import DigitSelect from './DigitSelect';
import NextGuess from './NextGuess';
import ScoreArea from './ScoreArea';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nextGuess: [0, 1, 2, 3],
      score: [{guess: [1,2,3,4], score: {bulls: 2, cows: 2}},
             {guess: [5,0,1,2], score: {bulls: 0, cows: 1}}]
    }
    this.chooseNumber = this.chooseNumber.bind(this);
  }
  chooseNumber(ball) {
    let digit = +ball.target.name;
    let value = +ball.target.value;
    let updateNextGuess = this.state.nextGuess
    updateNextGuess[digit] = value;
    this.setState({nextGuess: updateNextGuess});
    console.log(this.state.nextGuess)
  }
  render() {
    return(
      <div>
        <DigitSelect digitNumber={0} clickHandler={this.chooseNumber} />
        <DigitSelect digitNumber={1} clickHandler={this.chooseNumber} />
        <DigitSelect digitNumber={2} clickHandler={this.chooseNumber} />
        <DigitSelect digitNumber={3} clickHandler={this.chooseNumber} />
        <div className="clear"></div>
        <NextGuess code={this.state.nextGuess} />
        <div className="clear"></div>
        <ScoreArea listOfScores={this.state.score} />
      </div>
    );
  }
}

export default App;