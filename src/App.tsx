import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld";
import Clock from "./Clock";
import Person from "./Person";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Clock/>
                <Person/>
            </header>
        </div>
    );
}

export default App;
