import { Component } from 'react';

export class ClassTrafficLight extends Component {
  state = {
    lightState: 0,
  };

  lightColors = ['red', 'yellow', 'green'];

  getLightClass = (index: number) => {
    return this.state.lightState === index ? this.lightColors[index] : 'black';
  };

  handleNextState = () => {
    const isRed = this.state.lightState === 0;
    this.setState({ lightState: isRed ? this.lightColors.length - 1 : this.state.lightState - 1 });
    // this.setState({ lightState: isRed ? 0 : this.state.lightState - 1 });
  };

  render() {
    return (
      <div className='traffic-light-box'>
        <h2>Class Traffic Light</h2>
        <div className='traffic-light'>
          {this.lightColors.map((_color: string, index: number) => (
            <div className={`circle ${this.getLightClass(index)}`}></div>
          ))}
        </div>
        <button className='next-state-button' onClick={this.handleNextState}>
          Next State
        </button>
      </div>
    );
  }
}
