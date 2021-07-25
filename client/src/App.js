import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'

import { setCurrentUser, logoutUser } from './actions/authActions'

import Login from './components/auth/Login/Login'
import Register from './components/auth/Register/Register'

import Gallery from './components/Layout/Gallery'
import Dashboard from './components/Layout/Dashboard'

import ScrollToTop from './components/Layout/Utils/ScrollToTop'

import store from './store'

import './App.css'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken
  setAuthToken(token)
  // Decode token and get user info and exp
  const decoded = jwt_decode(token)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
  // Check for expired token
  const currentTime = Date.now() / 1000 // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser())

    // Redirect to login
    window.location.href = './login'
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/gallery" component={Gallery} />
          </Switch>
        </>
      </Router>
    </Provider>
  )
}

export default App
