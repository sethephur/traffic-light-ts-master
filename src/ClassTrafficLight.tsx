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
    const isLast = this.state.lightState === this.lightColors.length - 1;
    this.setState({ lightState: isLast ? 0 : this.state.lightState + 1 });
  };

  render() {
    return (
      <div className='traffic-light-box'>
        <h2>Class Traffic Light</h2>
        <div className='traffic-light'>
          <div className={`circle ${this.getLightClass(0)}`}></div>
          <div className={`circle ${this.getLightClass(1)}`}></div>
          <div className={`circle ${this.getLightClass(2)}`}></div>
        </div>
        <button className='next-state-button' onClick={this.handleNextState}>
          Next State
        </button>
      </div>
    );
  }
}
