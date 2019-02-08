import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tiles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue"
    }
  }


  boxClick = (event) => {
    this.setState({
      backgroundColor: "red"
    })
  }

  render() {
    return (
      <div className="TileContainer">
          <div className="Tiles" style={{backgroundColor: this.state.backgroundColor}} onClick={this.boxClick}></div>
      </div>
    );
  }
}

export default Tiles;

ReactDOM.render(<Tiles />, document.getElementById('root'));
