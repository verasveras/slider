import React, {Component} from 'react';
import BoardContainer from './boardContainer';
import Header from './header';

export default class Main extends Component {

  render(){
    return (<div>
    	<Header/>
    	<BoardContainer/>
    </div>)
  }

}