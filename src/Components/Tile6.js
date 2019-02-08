import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let yellow = "#FFEEDD"
let sapphire = "#9381FF"
class Tiles2 extends Component {

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

export default Tiles2;

ReactDOM.render(<Tiles2 />, document.getElementById('root'));
