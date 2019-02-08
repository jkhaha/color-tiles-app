import React, { Component } from 'react';
import Tiles from './Tiles'
import Tile2 from './Tile2'
import Tile3 from './Tile3'

class TileContainer extends Component {
  render(){
    return(
      <div className="grid-container">
      <Tiles/>
      <Tile2/>
      <Tile3/>
        <Tile2/>
        <Tile3/>
        <Tiles/>
          <Tile3/>
          <Tiles/>
          <Tile2/>
      </div>
    )
  }
}

export default TileContainer;
