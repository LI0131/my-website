import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from './components/HomePage';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/v1/home' component={Home} />
        {/* <Route path='/v1/about' component={About} /> */}
      </Switch>
    </Router>
  );
}

export default App;
