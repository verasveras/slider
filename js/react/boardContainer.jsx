import React, {Component} from 'react';
import Board from './board';

export default class BoardContainer extends Component {

  constructor(){
    super();
    this.state = {
        ids: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]],
        zero: {xIndex: 0, yIndex: 0}
    }

    this.handleClick = this.handleClick.bind(this);
  }

  shouldMove(coords){

    let moveInfo = {shouldMove: false,
                    axis: null}

    if (coords.xIndex == this.state.zero.xIndex){
        moveInfo.shouldMove = true,
        moveInfo.axis = 'y'
    }

    else if (coords.yIndex == this.state.zero.yIndex){
        moveInfo.shouldMove = true,
        moveInfo.axis = 'x'
    }

    return moveInfo;
  }

  handleClick (event, coords) {
    console.log(event.target.innerHTML, coords);
    console.log(this.shouldMove(coords));
  }

  render(){

    return (<Board ids={this.state.ids} handleClick={this.handleClick}/>)

  }

}