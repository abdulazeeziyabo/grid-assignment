// Grid.js
import React from 'react';
import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {range(numCols).map((colIndex) => (
            <div key={`col-${colIndex}`} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;

