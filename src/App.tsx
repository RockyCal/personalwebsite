import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Subheader from './Subheader'
import AppContainer from './AppContainer';
import './index.css'
import Navbar from './Navbar';

const App = () => {
    return (
        <AppContainer>
            <Header />
            <Subheader />
            <Navbar />
        </AppContainer>);
}

ReactDOM.render(<App />, document.getElementById('app'))