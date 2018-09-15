import React, { Component } from "react";
import { RobotApp } from '../robot-app'
import { AppContainer, Title, Instructions } from './styles';

// Main app component gives it's children updated 
// view port hight and width information and notifies them of changes.
// Takes care of top level layout.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <AppContainer>
        <Title>
          Robot Controller
        </Title>
        <Instructions>
          Use the place button to put the robot on the table. 
          It will move in the direction
          it's turned when you hit the move button.
        </Instructions>
        <RobotApp
          height={this.state.height}
          width={this.state.width}
        />
      </AppContainer>
    );
  }
}

export default App;
