import React, {Component} from 'react';
import Tile from './tile';

export default class Boards extends Component {


  render(){

  	const tableStyle = {
  		width: '32vw',
  		height: '32vw',
  		margin: 'auto auto',
  		border: '1px dashed black',
      position: 'relative'
  	}

    const buttonStyle = {
      backgroundColor: '#DBFF33',
      border: '0',
      boxShadow: 'none',
      border: '1px dashed black',
      margin: '1vh auto',
      fontSize: '2em'
    }

    console.log(this.props.ids);

    return (<div>
      <div style={tableStyle}>

	    {this.props.ids.map((subArray, yIndex) => {

	    	return subArray.map((oneID, xIndex) => {
          return (
            <Tile id={oneID} 
              coords={{xIndex, yIndex}} 
              key={oneID} 
              handleClick={this.props.handleClick}/>
            )
        })

	    })}

      </div>
      <button onClick={this.props.shuffle} 
              style={buttonStyle}>Shuffle</button>
      </div>)

  }

}
