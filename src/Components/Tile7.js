import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let yellow = "#F4CBC6"
let sapphire = "#8B2635"
class Tile7 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: sapphire
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(){
    const newColor = this.state.color == sapphire ? yellow : sapphire;
    this.setState({ color: newColor })
  }

  render() {
    return (
      <div className="TileContainer">
          <div className="grid-item" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
      </div>
    );
  }
}

export default Tile7;

ReactDOM.render(<Tile7 />, document.getElementById('root'));
