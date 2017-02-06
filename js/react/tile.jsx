import React, {Component} from 'react';

export default class Tile extends Component {


  render(){

    const style = {
      // border: '1px solid black',
      borderRadius: '5px',
      backgroundColor: '#FFFFFF'
    }

    const none = {
      opacity: '0'
    }

    return (<td style={this.props.id > 0? style : none}>
      {this.props.id}
    </td>)

  }

}
  
