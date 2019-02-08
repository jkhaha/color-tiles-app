import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let yellow = "#FF6B35"
let sapphire = "#004E89"
class Tile9 extends Component {

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

export default Tile9;

ReactDOM.render(<Tile9 />, document.getElementById('root'));
