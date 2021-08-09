import React from 'react';

const CanvasView = ({ canvasRef, width, height, onClick, gen }) => {
  return (
    <>
      <h4>"Generation: {gen}</h4>

      <canvas
        // className='canvasview'
        ref={canvasRef}
        width={width}
        height={height}
        onClick={onClick}
      />
    </>
  );
};
export default CanvasView;
