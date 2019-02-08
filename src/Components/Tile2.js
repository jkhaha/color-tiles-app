import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let burlywood = "#DAB894"
let pastelBlue = "#A7BED3"
class Tiles2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: pastelBlue
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(){
    const newColor = this.state.color == pastelBlue ? burlywood : pastelBlue;
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
