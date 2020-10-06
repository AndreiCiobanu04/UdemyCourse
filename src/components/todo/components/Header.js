import React from 'react'
import {  Link } from 'react-router-dom';
import AuthenticationService from '../AuthenticationService';
import {withRouter} from 'react-router'
const Header = () => {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  console.log(isUserLoggedIn);
    return(
      
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a className="navbar-brand">andrei</a></div>
            <ul className="navbar-nav">
               {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/andrei">Homepage</Link></li>}
                {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
            </ul>
            <ul className="navbar nav navbar-collapse justify-content-end">
               {!isUserLoggedIn && <li><Link  className="nav-link" to="/login">Login</Link></li>}
                {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            </ul>
                </nav>
            </header>
            
       
    )


}

export default withRouter(Header);