import styled from "styled-components";

const RobotImage = styled("img")`
  position: relative;
  top: ${props => props.yPosition + 'px'};
  left: ${props => props.xPosition + 'px'};
  transform: ${props => props.goingEast ? "scaleX(-1)" : `rotate(${props.rotation}deg)`};
  filter: ${props => props.goingEast ? "FlipH" : "none"};
  width: ${props => props.sideLength - 2 + "px"};
  height: ${props => props.sideLength - 2 + "px"};
  padding: 2px;
`;

const Cell = styled("div")`
  width: ${props => props.sideLength + "px"};
  height: ${props => props.sideLength + "px"};
  background-color: ${props => (props.dark ? "lightgreen" : "white")};
`;

const TableContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-item: flex-start;
  width: ${props => props.sideLength * props.tableSize + "px"};
  height: ${props => props.sideLength * props.tableSize + "px"};
`;

export {
  RobotImage,
  Cell,
  TableContainer
}