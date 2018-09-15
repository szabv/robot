import React from "react";
import { directions } from "../../robot/constants";
import {
  RobotImage,
  Cell,
  TableContainer
} from './styles';

const calculateCellSideLength = (height, width, tableSize) => {
  let shorterDimension = height < width ? height : width;
  // make some space for controls and headings.
  shorterDimension = shorterDimension - 275;
  if (shorterDimension < 450) {
    shorterDimension = 450;
  }
  return Math.round(shorterDimension / tableSize);
};

const createCells = (sideLength, tableSize) => {
  const cellArray = [];
  for (let i = 0; i < tableSize ** 2; ++i) {
    cellArray.push(<Cell key={i} sideLength={sideLength} dark={!(i % 2)} />);
  }
  return cellArray;
};

const showRobot = (sideLength, tableSize, { onTable, position, facing }) => {
  if (onTable) {
    const goingEast = facing === directions.EAST;
    const rotation = goingEast ? 0 : (facing * 90) + 90;
    const yPosition = ((sideLength * position.y) + sideLength) * -1;
    const xPosition = ((sideLength * position.x -1));
    return (
      <RobotImage 
        src="/robot.svg"
        rotation={rotation}
        sideLength={sideLength}
        goingEast={goingEast}
        yPosition={yPosition}
        xPosition={xPosition}
      />
    );
  }

  return null;
};

const Table = ({ width, height, tableSize, robotPlacement }) => {
  const sideLength = calculateCellSideLength(width, height, tableSize);
  return (
    <TableContainer sideLength={sideLength} tableSize={tableSize}>
      {createCells(sideLength, tableSize)}
      {showRobot(sideLength, tableSize, robotPlacement)}
    </TableContainer>
  );
};

export { Table };
