import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import CustomersContainer from './Containers/CustomersContainer';
import CustomerContainer from './Containers/CustomerContainer';
import NewCustomerContainer from './Containers/NewCustomerContainer';

class App extends React.Component{

  renderHome=()=><h1>Home</h1>

  renderCustomerContainer=()=><h1>Customer Container</h1>

  renderCustomerListContainer=()=><h1>Customer List Container</h1>

  render(){
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/customers" component={CustomersContainer}/>
        <Switch>
          <Route  path="/customers/new" component={NewCustomerContainer}/>
          <Route  
          path="/customers/:dni" 
          render={props => <CustomerContainer dni={props.match.params.dni}
          />}/>
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
