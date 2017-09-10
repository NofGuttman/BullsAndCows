import React from 'react';
import axios from 'axios';
import DigitSelect from './DigitSelect';
import NextGuess from './NextGuess';
import ScoreArea from './ScoreArea';
import Button from './Button';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nextGuess: [0, 1, 2, 3],
      score: []
    }
    this.chooseNumber = this.chooseNumber.bind(this);
    this.sendGuess = this.sendGuess.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }
  componentWillMount() {
    axios.post('/getScore', {})
      .then((response) => {
        this.setState({
          score: response.data
        })
      .catch((err) => {
          console.log(err)
        });
    });
  }
  chooseNumber(ball) {
    let digit = +ball.target.name;
    let value = +ball.target.value;
    let updateNextGuess = this.state.nextGuess
    updateNextGuess[digit] = value;
    this.setState({nextGuess: updateNextGuess});
    console.log(this.state.nextGuess)
  }
  sendGuess(){
    axios.post('/guess', {
      guess: this.state.nextGuess
    })
    .then((response) => {
      this.setState({
        score: response.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
  restartGame(){
    axios({
      method: 'post',
      url: '/restart'
    });
    this.setState({
      nextGuess: [0, 1, 2, 3],
      score: []
    })
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
        <Button style="game-button green-btn" clickHandler={this.sendGuess} text="Send Guess" />
        <ScoreArea clickHandler={this.restartGame} listOfScores={this.state.score} />
      </div>
    );
  }
}

export default App;