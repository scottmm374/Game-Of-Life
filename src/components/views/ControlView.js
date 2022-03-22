import React from 'react';
import { Label, Input, Container, Row, Col } from 'reactstrap';

const ControlView = (props) => {
  return (
    <>
      {/* <div className="control-buttons"> */}
      <Container fluid>
        <Row className='button-containers'>
          <Col xl='6'>
            <button className='control-button' onClick={props.startGame}>
              Start
            </button>
            <button className='control-button' onClick={props.stopGame}>
              Stop
            </button>
            <button className='control-button' onClick={props.clearBoard}>
              Clear
            </button>
          </Col>
          <Col xl='6'>
            <h4>Generation: {props.gen}</h4>
          </Col>
        </Row>

        {/* </div> */}
        <Row>
          <Col>
            <slider className='slider-speed'>
              <Label htmlFor='controlSpeed'>Speed</Label>
              <input
                type='range'
                min='50'
                max='1000'
                step='50'
                onChange={props.controlSpeed}
              />
            </slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ControlView;
