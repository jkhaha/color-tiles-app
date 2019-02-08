import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let maroon = "#E0BAD7"
let cyan = "#61D095"
class Tile4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: cyan
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(){
    const newColor = this.state.color == cyan ? maroon : cyan;
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
