import React, {Component} from 'react';

export default class Tile extends Component {

  render(){

    // x = # / 3
    // y = 3 - # % 3 

    const positions = {
      // '0,0': 
      // '0,1':
      // '0,2': 
      // '0,3':
      // '1,0': 
      // '1,1':
      // '1,2': 
      // '1,3':
      // '2,0': 
      // '2,1':
      // '2,2': 
      // '2,3':  
      // '3,0': 
      // '3,1':
      // '3,2': 
      // '3,3':     
    }

    const style = {
      borderRadius: '5px',
      backgroundColor: '#75FF33',
      fontSize: '2em',
      fontFamily: 'Josefin Sans',
      position: 'absolute'
    }

    const none = {
      opacity: '0',
      borderRadius: '5px',
    }

    function getStyle(id, coords){
      if (id == 0) return none;
      else {
        let style2 = Object.assign(style);
        style.top = coords.yIndex * 100;
        style.left = coords.xIndex * 100;
        return style2;
      }

    }

    return (
      <div style={getStyle(this.props.id, this.props.coords)}
        onClick={(event) => {this.props.handleClick(event, this.props.coords)}}>
        {this.props.id}
      </div>
    )

  }

}
  
