import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [lightState, setLightState] = useState(0);
  const lightColors: string[] = ['red', 'yellow', 'green'];
  const isLast: boolean = lightState === lightColors.length - 1;

  const getLightClass = (index: number) => {
    return lightState === index ? lightColors[index] : 'black';
  };

  return (
    <div className='traffic-light-box'>
      <h2>Functional Traffic Light</h2>
      <div className='traffic-light'>
        <div className={`circle ${getLightClass(0)}`}></div>
        <div className={`circle ${getLightClass(1)}`}></div>
        <div className={`circle ${getLightClass(2)}`}></div>
      </div>
      <button
        className='next-state-button'
        onClick={() => {
          isLast ? setLightState(0) : setLightState(lightState + 1);
        }}
      >
        Next State
      </button>
    </div>
  );
};
