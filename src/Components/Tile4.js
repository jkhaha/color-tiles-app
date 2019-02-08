import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let melon = "#D5F2E3"
let cerulean = "#BA2D0B"
class Tile4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: cerulean
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(){
    const newColor = this.state.color == cerulean ? melon : cerulean;
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

export default Tile4;

ReactDOM.render(<Tile4 />, document.getElementById('root'));
