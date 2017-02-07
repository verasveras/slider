import React, {Component} from 'react';

export default class Tile extends Component {

  constructor(props){
    super(props);

    this.state = {
      position: {
        top: `${this.props.coords.yIndex * 25}%`,
        left: `${this.props.coords.xIndex * 25}%`
      }
    }
  }

  getStyle(id, coords){

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

    if (id == 0) return none;
    else {
      let style2 = Object.assign({}, style, this.state.position);
      return style2;
    }

  }

  render(){

    return (
      <div style={this.getStyle(this.props.id, this.props.coords)}
        onClick={(event) => {this.props.handleClick(event, this.props.coords)}}>
        {this.props.id}
      </div>
    )

  }

}
  
