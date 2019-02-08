import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let yellow = "#CBEEF3"
let sapphire = "#2F97C1"
class Tile8 extends Component {

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

export default Tile8;

ReactDOM.render(<Tile8 />, document.getElementById('root'));
