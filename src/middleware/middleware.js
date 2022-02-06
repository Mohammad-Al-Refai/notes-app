import { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Login from '../pages/Auth/Login'

//RouteMiddleware for confirm if user valid to access to dashboard
export function RouteMiddleware(props) {
  let token = localStorage.getItem('user')
  let { uid, storedToken } = props
  return (
    <Fragment>
      {token || storedToken || uid || uid !== '' ? (
        props.page
      ) : (
        <>
          <Login />
          <Redirect to={{ pathname: '/login' }} />
        </>
      )}
    </Fragment>
  )
}
