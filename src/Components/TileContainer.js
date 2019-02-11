import React, { Component } from 'react';
import Tiles from './Tiles'
import Tile2 from './Tile2'
import Tile3 from './Tile3'
import Tile4 from './Tile4'
import Tile5 from './Tile5'
import Tile6 from './Tile6'
import Tile7 from './Tile7'
import Tile8 from './Tile8'
import Tile9 from './Tile9'
import Header from './Header'

class TileContainer extends Component {
  render(){
    return(
      <div>
        <Header/>
        <div className="grid-container">
      <Tiles/>
      <Tile2/>
      <Tile3/>

        <Tile4/>
        <Tile5/>
        <Tile6/>

          <Tile7/>
          <Tile8/>
          <Tile9/>
        </div>
      </div>
    )
  }
}

export default TileContainer;
