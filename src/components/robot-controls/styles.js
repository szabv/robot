import styled from "styled-components";

const ControlsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2px;
  width: 450px;
`
const Row = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`
const Button = styled('button')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: #0069ed;
  border-radius: 7px;
  border: 0px;
  margin: 5px 1px;
  height: 40px;
  width: 33%;
  font-size: 1.2em;
  transition: background 250ms ease-in-out, 
                transform 150ms ease;
  appearance: none;

  &:hover,
  &:focus {
      background: #0053ba;
  }

  &:focus {
      outline: 1px solid #fff;
      outline-offset: -4px;
  }

  &:active {
      transform: scale(0.99);
  }
`
const MoveLabel = styled('span')`
  margin-top: -9px;
`

const Label = styled('span')`
  margin: 5px 1px;
`

const CoordinateInput = styled('input')`
  padding: 8px;
  margin: 5px 4px;
  border-radius: 7px;
  width: 30px;
  height: 20px;
  appearance: none;
  font-size: 1.2em;
`
const DirectionSelect = styled('select')`
  padding: 2px;
  margin: 5px 1px;
  border-radius: 7px;
  width: 33%;
  height: 39px;
  font-size: 1.2em;
`
export {
  ControlsContainer,
  Row,
  Button,
  MoveLabel,
  Label,
  CoordinateInput,
  DirectionSelect
}