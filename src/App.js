import { Route, Router, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { RouteMiddleware } from './middleware/middleware'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import  Dashboard  from './pages/Dashboard'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import store from './store'
import { connect } from 'react-redux'

function App(props) {
  const newHistory = useHistory()

  return (
   
      <Router history={newHistory}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/main"/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/main">
            <RouteMiddleware page={<Dashboard />} uid={props.uid} storedToken={props.token}  />
          </Route>
          <Route  path="*">
            <h1 className='w-100 text-center p-5 text-white'>Page Not found</h1>
          </Route>
        </Switch>
      </Router>
  
  )
}
let mapStateToProps = (state) => {
  console.log(state)
  return {
    uid: state.MainReducer.uid,
    token:state.MainReducer.token
  }
}

export default connect(mapStateToProps)(App)
