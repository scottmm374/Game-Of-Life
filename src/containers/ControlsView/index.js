import React from 'react';
import { ButtonGroup, Button, Label } from 'reactstrap';

const ControlView = ({ start, stop, clear, controlSpeed, speed }) => {
  return (
    <>
      <ButtonGroup className='controls d-flex justify-content-center'>
        <Button className='control-button' onClick={start}>
          Start
        </Button>

        <Button className='control-button' onClick={stop}>
          Stop
        </Button>

        <Button className='control-button' onClick={clear}>
          Clear
        </Button>
      </ButtonGroup>
      <slider className='slider-speed'>
        <Label htmlFor='controlSpeed'>Speed</Label>
        <input
          type='range'
          min='50'
          max='1000'
          step='50'
          onChange={controlSpeed}
        />
      </slider>{' '}
      <p>Speed: {speed}</p>
    </>
  );
};

export default ControlView;
