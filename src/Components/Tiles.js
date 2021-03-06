import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let peach = "#AFD5AA"
let oceanBlue = "#F0F2EF"
class Tiles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: oceanBlue
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(){
    const newColor = this.state.color == oceanBlue ? peach : oceanBlue;
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

export default Tiles;

ReactDOM.render(<Tiles />, document.getElementById('root'));
