import React, {Component} from 'react';

export default class Tile extends Component {


  render(){

    const style = {
      borderRadius: '5px',
      backgroundColor: '#FFFFFF'
    }

    const none = {
      opacity: '0'
    }

    return (<td style={this.props.id > 0? style : none} onClick={(event) => {this.props.handleClick(event, this.props.coords)}}>
      {this.props.id}
    </td>)

  }

}
  
