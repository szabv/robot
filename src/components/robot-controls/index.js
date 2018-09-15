import React from 'react';
import {
  ControlsContainer,
  Row,
  Button,
  MoveLabel,
  Label,
  CoordinateInput,
  DirectionSelect
} from './styles';

const RobotControls = ({xCoordinate, yCoordinate, direction, updateValue, handleCommand}) => {
  return <ControlsContainer>
    <Row>
      <Button onClick={() => handleCommand('turnLeft')}>
        {'< left'}
      </Button>
      <Button onClick={() => handleCommand('move')}>
        ^
        <MoveLabel>
          move
        </MoveLabel>
      </Button>
      <Button onClick={() => handleCommand('turnRight')}>
        {'right >'}
      </Button>
    </Row>
    <Row>
      <Label>X:</Label>
      <CoordinateInput 
        type='number'
        value={xCoordinate}
        onChange={(e) => updateValue('xCoordinate', e.target.value) }
      />
      <Label>Y:</Label>
      <CoordinateInput
        type='number'
        value={yCoordinate}
        onChange={(e) => updateValue('yCoordinate', e.target.value) }
      />
      <DirectionSelect value={direction} onChange={(e) => updateValue('direction', e.target.value)}>
        <option value="0">North</option>
        <option value="1">East</option>
        <option value="2">South</option>
        <option value="3">West</option>
      </DirectionSelect>
      <Button onClick={() => handleCommand('place')}>place</Button>
    </Row>
  </ControlsContainer>
}

export {
  RobotControls
}