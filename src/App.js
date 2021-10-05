import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Users from './users/pages/Users';
import NewExpense from './expenses/pages/NewExpense';

function App() {
  return (
    
    <Router>
      <Switch>

        <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/expenses/new" exact>
          <NewExpense />
        </Route>


        <Redirect to="/"/>
      </Switch>
    </Router>
    
  );
}

export default App;