import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let orange = "#EE6055"
let paleGreen = "#AAF683"
class Tile3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: paleGreen
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(){
    const newColor = this.state.color == paleGreen ? orange : paleGreen;
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

export default Tile3;

ReactDOM.render(<Tile3 />, document.getElementById('root'));
