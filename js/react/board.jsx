import React, {Component} from 'react';
import Tile from './tile';

export default class Boards extends Component {


  render(){

  	const style = {
  		width: '30vw',
  		height: '30vw',
  		margin: 'auto auto',
  		border: '1px dashed black'
  	}

    return (<table style={style}>
    	<tbody>

	    {this.props.ids.map((subArray, yIndex) => {

	    	return (
	    		<tr key={yIndex}>
	    			{ subArray.map((oneID, xIndex) => <Tile id={oneID} coords={{xIndex, yIndex}} key={xIndex} handleClick={this.props.handleClick}/> ) }
	    		</tr>
		    ) 

	    })}

	    </tbody>
    </table>)

  }

}
