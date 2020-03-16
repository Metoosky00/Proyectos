import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import {Details} from './Pages/Detail';
import {Home} from './Pages/Home';
import {NotFound} from './Pages/NotFound';

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/details/:movieId' component={Details}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
  }
}

export default App;
