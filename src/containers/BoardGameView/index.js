import React from 'react';
import ControlView from '../ControlsView';
import PresetPanelView from '../PresetPanelView';
import RulesView from '../RulesView/index';
import CanvasView from '../Canvas';
import { Container, Row, Col } from 'reactstrap';

const BoardGameView = ({
  canvasRef,
  width,
  height,
  onClick,
  controlSpeed,
  startGame,
  stopGame,
  clearBoard,
  gameRunning,
  handlePresets,
  gen,
  speed,
}) => {
  return (
    <Container>
      <Row>
        <Col sm='4'>
          <ControlView
            stop={stopGame}
            start={startGame}
            clear={clearBoard}
            controlSpeed={controlSpeed}
            speed={speed}
          />
        </Col>
        <Col sm='8'>
          <CanvasView
            canvasRef={canvasRef}
            width={width}
            height={height}
            onClick={onClick}
            gen={gen}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PresetPanelView handlePresets={handlePresets} gen={gen} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RulesView />
        </Col>
      </Row>
    </Container>
  );
};

export default BoardGameView;
