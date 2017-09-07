import React from 'react';
import DigitSelect from './DigitSelect';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nextGuess: [0, 0, 0, 0]
    }
  }
  chooseNumber(place, number) {
    this.state.nextGuess[place] = number;
  }
  render() {
    return(
      <div>
        <DigitSelect digitNumber={0} />
        <DigitSelect digitNumber={1} />
        <DigitSelect digitNumber={2} />
        <DigitSelect digitNumber={3} />
      </div>
    );
  }
}

export default App;