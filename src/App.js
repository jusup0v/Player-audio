import React, { Component } from 'react';
import Toggle from './components/Toggle/Toggle';
import Password from './components/Password/Password';
import Batteri from './components/Battery/Batteri';
import Game from './components/Game/Game';
import NumToWords from './components/NumToWords/NumToWords';
import Song from './components/Song/Song';

class App extends Component {
  constructor() {
    super()
    this.state = {
      active: false,
      data: ['', '', '', '', '', '', '', '', '']
    }
  }
  onClick = () => {
    this.setState(({ active }) => {
      return {
        active: !active
      }
    })
  }
  onClick2 = () => {
    this.setState(({ active }) => {
      return {
        active: !active
      }
    })
  }

  render() {
    const { active, data } = this.state;
    return (
      <div>
        {/* <Toggle active={active} onClick={this.onClick} /> */}
        {/* <Password active={active} onClick2={this.onClick2}/> */}
        {/* <Batteri /> */}
        {/* <Game/> */}
        {/* <NumToWords /> */}
        <Song />
      </div>
    );
  }
}

export default App;