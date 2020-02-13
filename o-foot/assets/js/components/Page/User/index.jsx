// == Import : npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import UserHome from '../UserHome';

// == Import : local


// == Import : components


// == Composant

const routes = [
  {
    path: '/user',
    component: User,
    routes: [
      {
        path: '/user/profile',
        component: UserHome,
      },
    ],
  },
];


const User = ({ routes }) => (
  <div id="user">
    <h2>User</h2>
    <ul>
      <li>
        <Link to="/user/profile">Profile</Link>
      </li>
      <li>
        <Link to="/user/edit">Edit</Link>
      </li>
    </ul>

    <Switch>
      {routes.map((route, i) => (
        console.log('from User:', route),
          <Route
            path={route.path}
            render={(props) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
      ))}
    </Switch>
  </div>

);

// == Export
export default User;
