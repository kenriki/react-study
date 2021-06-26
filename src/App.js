import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Home from './pages/home/home.component'
import Posts from './pages/posts/posts.component'
import PostDetail from './pages/post-detail/post-detail.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-adn-sign-up.component'

const isAuthenticated = true;

const App = () => {
  return (
    <div className="App">
      <p>{`isAuthenticated: ${isAuthenticated}`}</p>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">SingIn</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/posts/1">Posts > 1</Link></li>
            <li><Link to="/posts/2">Posts > 2</Link></li>
          </ul>

          <hr/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" render={props => isAuthenticated
              ? (<Redirect to="/"/>)
              : (<SignInAndSignUpPage {...props}/>)
            }/>
            <PrivateRoute exact path="/posts" component={Posts}/>
            <PrivateRoute exact path="/posts/:id" component={PostDetail}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/signin"/>
    )}/>
  )
}

export default App