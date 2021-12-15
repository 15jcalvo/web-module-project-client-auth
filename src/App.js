import React from 'react';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="header">
          <h1>Friends Database</h1>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/friends'>Friend List</Link>
            </li>
            <li>
              <Link to='/addfriend'>Add Friend</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/friends' component={FriendsList} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
