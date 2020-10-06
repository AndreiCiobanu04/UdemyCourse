
import React from 'react'
import AuthenticationService from '../AuthenticationService'
import {Route, Redirect} from 'react-router-dom'

const AuthenticatedRoute = (props) => {
 

    if(AuthenticationService.isUserLoggedIn()){
       return( <Route {...props} />)
    }
    else{
       return (<Redirect to="/login"/>)
    }


}

export default AuthenticatedRoute;