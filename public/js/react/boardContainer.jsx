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
    this.shuffle = this.shuffle.bind(this);

  }

  handleClick (event, coords) {

    let shouldMove = this.shouldMove(coords)
    if (shouldMove == 'x') this.moveX(coords);
    else if (shouldMove == 'y') this.moveY(coords);

  }

  shouldMove(coords){

    if (coords.xIndex == this.state.zero.xIndex) return 'y';
    else if (coords.yIndex == this.state.zero.yIndex) return 'x';
    return null;

  }

  moveX (coords) {

    let newIds = this.state.ids.slice();

    if (this.state.zero.xIndex < coords.xIndex) {
      let i = this.state.zero.xIndex;
      for (; i < coords.xIndex; i++){
        newIds[this.state.zero.yIndex][i] = newIds[this.state.zero.yIndex][i+1];
      }
      newIds[this.state.zero.yIndex][i] = '0';
    }
    else {
      let i = this.state.zero.xIndex;
      for (; i > coords.xIndex; i--){
        newIds[this.state.zero.yIndex][i] = newIds[this.state.zero.yIndex][i-1];
      }
      newIds[this.state.zero.yIndex][i] = '0';
    }

    this.setState({
      ids: newIds,
      zero: coords
    })

  }

  moveY (coords) {
    
    let newIds = this.state.ids.slice();

    if (this.state.zero.yIndex < coords.yIndex) {
      let i = this.state.zero.yIndex;
      for (; i < coords.yIndex; i++){
        newIds[i][this.state.zero.xIndex] = newIds[i+1][this.state.zero.xIndex];
      }
      newIds[i][this.state.zero.xIndex] = '0';
    }
    else {
      let i = this.state.zero.yIndex;
      for (; i > coords.yIndex; i--){
        newIds[i][this.state.zero.xIndex] = newIds[i-1][this.state.zero.xIndex];
      }
      newIds[i][this.state.zero.xIndex] = '0';

    } 

    this.setState({
      ids: newIds,
      zero: coords
    })

  }


  render(){

    return (<Board ids={this.state.ids} handleClick={this.handleClick} shuffle={this.shuffle}/>)

  }

}