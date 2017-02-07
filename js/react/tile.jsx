import React, {Component} from 'react';

export default class Tile extends Component {

  render(){

    const style = {
      borderRadius: '5px',
      backgroundColor: '#75FF33',
      height: '24%',
      width: '24%',
      fontSize: '2em',
      textAlign: 'center',
      verticalAlign: 'middle',
      fontFamily: 'Josefin Sans',
      position: 'absolute',
      margin: '0',
      lineHeight: '260%'
    }

    const none = {
      opacity: '0',
      borderRadius: '5px',
    }

    function getStyle(id, coords){
      if (id == 0) return none;
      else {
        let style2 = Object.assign(style);
        style.top = `${coords.yIndex * 25}%`;
        style.left = `${coords.xIndex * 25}%`;
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
  
