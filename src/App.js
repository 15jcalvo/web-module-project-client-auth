import React from 'react';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'
import Logout from './components/Logout'
import ProtectedRoute from './components/ProtectedRoute'
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
              <Link to='/friends/add'>Add Friend</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/friends' component={FriendsList} />
          <ProtectedRoute exact path='/friends/add' component={AddFriend} />
          <Route exact path='/' component={Login} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
