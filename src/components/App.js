import React from 'react';
import DigitSelect from './DigitSelect';
import NextGuess from './NextGuess';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nextGuess: [0, 0, 0, 0]
    }
    this.chooseNumber = this.chooseNumber.bind(this);
  }
  chooseNumber(ball) {
    let digit = +ball.target.name;
    let value = +ball.target.value;
    console.log(digit, value);
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
        <NextGuess code={this.state.nextGuess} />
      </div>
    );
  }
}

export default App;