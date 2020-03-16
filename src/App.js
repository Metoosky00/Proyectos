import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import BitconPriceContainer from './sections/conteiner-component';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <BitconPriceContainer/>
    </div>
  );
  }
}

export default App;
