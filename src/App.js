import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="header">
          <h1>Friends Database</h1>
          <ul>
            <li>
              <h2>Login</h2>
            </li>
            <li>
              <h2>Friend List</h2>
            </li>
            <li>
              <h2>Add Friend</h2>
            </li>
            <li>
              <h2>Logout</h2>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
