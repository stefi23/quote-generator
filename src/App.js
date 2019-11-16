import React from 'react';
import QuoteGenerator from './Components/QuoteGenerator.js'
import CurrentDateAndTime from './Components/CurrentDateAndTime.js'

import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <CurrentDateAndTime />
        <QuoteGenerator/>
        </div>
    )
  }
}

export default App;
