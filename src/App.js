import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Grommet } from 'grommet';
import { grommet } from "grommet/themes";
import history from './history';
import Home from './components/pages/home';
import Resume from './components/pages/resume';
import Projects from './components/pages/projects';

function App() {
  return (
    <Grommet theme={grommet}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/v1/home'/>}/>
          <Route path='/v1/home' component={Home} />
          <Route path='/v1/about' component={Resume} />
          <Route path='/v1/projects' component={Projects} />
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
