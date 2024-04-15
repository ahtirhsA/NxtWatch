import Cookie from 'js-cookie'
import {Redirect,Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jtoken = Cookie.get('jwt_token')

  if (jtoken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
