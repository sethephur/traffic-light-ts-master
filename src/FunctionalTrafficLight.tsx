import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [lightState, setLightState] = useState(0);
  const lightColors: string[] = ['red', 'yellow', 'green'];
  const isRed: boolean = lightState === 0;

  const getLightClass = (index: number) => {
    return lightState === index ? lightColors[index] : 'black';
  };

  const nextColor = () => {
    isRed ? setLightState(lightColors.length - 1) : setLightState(lightState - 1);
  };

  return (
    <div className='traffic-light-box'>
      <h2>Functional Traffic Light</h2>
      <div className='traffic-light'>
        {lightColors.map((_color: string, index: number) => (
          <div className={`circle ${getLightClass(index)}`}></div>
        ))}
      </div>
      <button className='next-state-button' onClick={nextColor}>
        Next State
      </button>
    </div>
  );
};
