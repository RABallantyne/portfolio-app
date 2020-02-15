import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import coolDesign from './data.js';

const numRows = 24;
const numCols = 24;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

const design = () => {
  return coolDesign;
};

const randomGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0)));
  }
  console.log(rows);
  return rows;
};

const emptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

export default function Life() {
  const [grid, setGrid] = useState(() => {
    return emptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runLife = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(currGrid => {
      return produce(currGrid, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += currGrid[newI][newJ];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (currGrid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runLife, 500);
  }, []);

  return (
    <div className='life-container'>
      <h1 className='large'>Conway's Game of Life</h1>
      <p>
        The rules to this game are simple: if a cell has 2 or 3 neighbors it
        survives, any more or less and it dies. If a dead cell has exactly 3
        neighbors it comes to life. Click on any cell to render it dead or
        alive. This project was built with react using hooks.
      </p>
      <a
        href='https://github.com/RABallantyne/portfolio-app/blob/master/src/components/portfolio/gameOfLife/Life.js'
        rel='noopener noreferrer'
        target='_blank'
      >
        Github
      </a>
      <div className='buttons'>
        <div
          className='btn'
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runLife();
            }
          }}
        >
          {running ? 'stop' : 'start'}
        </div>
        <div
          className='btn'
          onClick={() => {
            setGrid(emptyGrid());
          }}
        >
          clear
        </div>
        <div
          className='btn'
          onClick={() => {
            setGrid(randomGrid());
          }}
        >
          randomize
        </div>
        <div
          className='btn'
          onClick={() => {
            setGrid(design());
          }}
        >
          design
        </div>
      </div>
      <div className='life-game'>
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              className={grid[i][k] ? 'box on' : 'box off'}
            />
          ))
        )}
      </div>
    </div>
  );
}
