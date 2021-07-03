import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { CSVLink } from "react-csv";

import { Grid } from '@material-ui/core';
import About from './components/About';
import Home from './pages/home/home.component'
import Posts from './pages/posts/posts.component'
import PostDetail from './pages/post-detail/post-detail.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-adn-sign-up.component'

const isAuthenticated = true;

const App = () => {
  return (
    <div className="App">
      <p>{`isAuthenticated: ${isAuthenticated}`}</p>
      <Grid container direction="column">
        <Grid item>
          {/* <Header /> */}
          <h1>test</h1>
        </Grid>
        <Grid item container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Router>
              <Switch>
                <Route exact path="/">
                  {/* <Content /> */}
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </Router>
          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">SingIn</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/posts/1">Posts > 1</Link></li>
            <li><Link to="/posts/2">Posts > 2</Link></li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" render={props => isAuthenticated
              ? (<Redirect to="/" />)
              : (<SignInAndSignUpPage {...props} />)
            } />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/posts/:id" component={PostDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}




const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];



const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route {...rest} render={props => (isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/signin" />
      )} />
      <CSVLink data={data} headers={headers} filename="download.csv">
        Download me
      </CSVLink>;
    </>
  )
}


export default App