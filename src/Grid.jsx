// Grid.js
import React from "react";
import { range } from "./utils";

function Grid({ numRows, numCols }) {
  const rows = range(numRows);
  const cols = range(numCols);

  return (
    <div className='grid'>
      {rows.map((rowIndex) => (
        <div key={rowIndex} className='row'>
          {cols.map((colIndex) => (
            <div key={colIndex} className='cell'></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
