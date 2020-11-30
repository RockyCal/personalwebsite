import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Subheader from './Subheader'
import './index.css'

class App extends React.Component{
    render(){
        return(
        	<div>
        		<Header />
        	    <Subheader />
        	</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))