import React from 'react';

const CanvasView = ({ canvasRef, width, height, onClick }) => {
  return (
    <div className='canvasview'>
      <h4>"Generation: "Gebrations here"</h4>

      <canvas ref={canvasRef} width={width} height={height} onClick={onClick} />
    </div>
  );
};
export default CanvasView;
