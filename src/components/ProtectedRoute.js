import { Route, Redirect } from 'react-router-dom';
import Header from './Header.js';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>

      {() =>
        props.loggedIn
          ? <>
            <Header loggedIn email={props.email} onSignOut={props.onSignOut}/>
            <Component {...props} />
          </>
          : <Redirect to="sign-up" />
      }
    </Route>
  )
}

export default ProtectedRoute;