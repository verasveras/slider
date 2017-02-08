import React, {Component} from 'react';
import Tile from './tile';

export default class Boards extends Component {


  render(){

  	const tableStyle = {
  		width: '32vw',
  		height: '32vw',
  		margin: 'auto auto',
  		border: '1px dashed black'
  	}

    const buttonStyle = {
      backgroundColor: '#DBFF33',
      border: '0',
      boxShadow: 'none',
      border: '1px dashed black',
      margin: '1vh auto',
      fontSize: '2em'
    }

    return (<div>
      <table style={tableStyle}>
    	<tbody>

	    {this.props.ids.map((subArray, yIndex) => {

	    	return (
	    		<tr key={yIndex}>
	    			{ subArray.map((oneID, xIndex) => <Tile id={oneID} coords={{xIndex, yIndex}} key={xIndex} handleClick={this.props.handleClick}/> ) }
	    		</tr>
		    ) 

	    })}

	    </tbody>
    </table>
    </div>)

  }

}
