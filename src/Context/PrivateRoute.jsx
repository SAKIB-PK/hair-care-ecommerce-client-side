import { Redirect, Route } from 'react-router'
import Loading from '../Component/Loading/Loading.jsx'
import useAuth from '../Hooks/useAuth.js'

const PrivateRoute = ({children,...rest}) => {
    const {user,loading}= useAuth()
    if(loading){
        return <Loading/>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
    />
    )
    
}

export default PrivateRoute
