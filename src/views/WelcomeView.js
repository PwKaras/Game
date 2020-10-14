import React from 'react';
import Header from '../components/Header';

const WelcomeView = () => {
    return (
    <>
    <Header/>
        <h1>hello world</h1>
        <div className="App">
            <header className="App-header">
                <h2>Game will be here</h2>
            </header>
        </div>
    </>
    );
}

export default WelcomeView;