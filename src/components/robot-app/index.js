import React, { Component } from 'react';
import { directions } from '../../robot/constants';
import { Table } from '../tabel';
import { RobotControls } from '../robot-controls';
import { Robot } from '../../robot';
import { Container } from './styles';

const TABLE_SIZE = 5;

class RobotApp extends Component {
  constructor(props) {
    super(props);
    this.robot = new Robot(TABLE_SIZE);
    this.state = {
      xCoordinate: 0,
      yCoordinate: 0,
      direction: directions.NORTH,
      robotPlacement: this.robot.getPlacement()
    };
  }

  updateValue = (key, value) => {
    this.setState({
      [key]: Number(value)
    })
  }

  handleCommand = (command) => {
    if(this.robot[command](this.state.xCoordinate, this.state.yCoordinate, this.state.direction)){
      this.setState({
        robotPlacement: this.robot.getPlacement()
      });
    }
  }

  render() {
    return (
        <Container>
          <Table 
            tableSize={TABLE_SIZE}
            width={this.props.width}
            height={this.props.height}
            robotPlacement={this.state.robotPlacement}
          />
          <RobotControls 
            xCoordinate={this.state.xCoordinate}
            yCoordinate={this.state.yCoordinate}
            direction={this.state.direction}
            updateValue={this.updateValue} 
            handleCommand={this.handleCommand}
          />
        </Container>
    );
  }
};

export {
  RobotApp
}