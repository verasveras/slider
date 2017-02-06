import React, {Component} from 'react';
import Board from './board';
import Header from './header';

export default class Main extends Component {
	
  render(){
    return (<div>
    	<Header/>
    	<Board/>
    </div>)
  }

}