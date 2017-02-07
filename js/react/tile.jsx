import React, {Component} from 'react';

export default class Tile extends Component {

  render(){

    const style = {
      borderRadius: '5px',
      backgroundColor: '#75FF33',
      width: '8vh'
    }

    const style2 = {
      borderRadius: '5px',
      backgroundColor: '#33FF57',
      width: '8vh'
    }

    const none = {
      opacity: '0',
      borderRadius: '5px',
    }

    function getStyle(id){
      if (id == 0) return none;
      else if (id%2 > 0) return style;
      else return style2;

    }

    return (<td style={getStyle(this.props.id)} onClick={(event) => {this.props.handleClick(event, this.props.coords)}}>
      {this.props.id}
    </td>)

  }

}
  
