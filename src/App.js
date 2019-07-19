import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Home from './components/MainPage';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/v1/home'/>}/>
        <Route path='/v1/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
