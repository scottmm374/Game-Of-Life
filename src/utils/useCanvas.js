import React, { useEffect, useState, useRef } from "react";
import Presets from "./presets";
import ControlPanel from "../components/ControlPanel";

const canvasWidth = 625;
const canvasHeight = 625;
const cell_size = 25;

const COLS = Math.floor(canvasHeight / cell_size);
const ROWS = Math.floor(canvasWidth / cell_size);

function UseCanvas() {
  const canvasRef = useRef(null);
  // const [cell_size, setCell_size] = useState(25);
  const [gen, setGen] = useState(0);

  // represents canvas height/ width and cell size
  const [initialGrid] = useState(
    new Array(COLS).fill(null).map(() => new Array(ROWS).fill(1))
  );
  console.table(initialGrid);
  initialGrid[8][10] = 1;

  //state for Presets, might move this
  const [presetGrid, setPresetGrid] = useState(
    Presets("beehive", 625, 625, 25)
  );
  console.table(presetGrid);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // ctx.scale(canvasWidth, canvasHeight);

    function render(grid, context) {
      for (let col = 0; col < ROWS; col++) {
        for (let row = 0; row < COLS; row++) {
          const cell = grid[col][row];

          context.beginPath();
          // context.rect(col, col, cell_size, cell_size);
          context.rect(col * cell_size, row * cell_size, cell_size, cell_size);

          if (cell) {
            context.fillStyle = "white";
          }
          context.fill();
          context.lineWidth = 1;
          context.strokeStyle = "#ff751a";
          context.stroke();
        }
      }
    }
    // clear canvas before next render
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // Change when I have presets done
    render(presetGrid, ctx);
  }, [presetGrid, gen]);

  return (
    <div>
      <ControlPanel
        canvasRef={canvasRef}
        gen={gen}
        setGen={setGen}
        presetGrid={presetGrid}
        setPresetGrid={setPresetGrid}
        initialGrid={initialGrid}
      />
      <canvas
        ref={canvasRef}
        style={{ width: canvasWidth, height: canvasHeight }}
      />
    </div>
  );
}

export default UseCanvas;
