import React, {Component} from 'react';
import Tile from './tile';

export default class Boards extends Component {

  render(){

  	const style = {
  		width: '30vw',
  		height: '30vw',
  		margin: 'auto auto',
  		border: '2px solid black'
  	}

  	let ids = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];

    return (<table style={style}>
    	<tbody>

	    {ids.map((subArray, yIndex) => {

	    	return (
	    		<tr key={yIndex}>
	    			{ subArray.map((oneID, xIndex) => <Tile id={oneID} coords={{xIndex, yIndex}} key={xIndex}/> ) }
	    		</tr>
		    ) 

	    })}

	    </tbody>
    </table>)

    // return (<div/>)
  }

}
