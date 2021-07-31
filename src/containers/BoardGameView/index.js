import React from 'react';
import ControlView from '../ControlsView';
import PresetPanelView from '../PresetPanelView';
import RulesView from '../RulesView/index';
import CanvasView from '../Canvas';

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
    <div className='justify-content-center boardgame'>
      <RulesView />

      {/* <PresetPanelView handlePresets={handlePresets} gen={gen} /> */}

      <div className='controls-and-game'>
        <CanvasView
          canvasRef={canvasRef}
          width={width}
          height={height}
          onClick={onClick}
        />
      </div>
      <div className='controls'>
        <ControlView
          stop={stopGame}
          start={startGame}
          clear={clearBoard}
          gen={gen}
        />
      </div>
      <div>
        <PresetPanelView handlePresets={handlePresets} gen={gen} />
      </div>
    </div>
  );
};

export default BoardGameView;
