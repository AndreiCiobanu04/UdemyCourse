import React from 'react'
import LoginComponent from './components/LoginComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from './components/WelcomeComponent'
import ErrorComponent from './components/ErrorComponent'
import ListToDo from './components/ListToDo'
import Header from './components/Header'
import Footer from './components/Footer'
import LogoutComponent from './components/LogoutComponent'
import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Todo from './components/Todo'
const ToDoApp = () => {
    return (
        <div className="todo">
        <Router>
                <>
                <Header />
            <Switch>
                <Route exact path="/">
                    <LoginComponent />
                </Route>

               
                <Route path="/login">
                    <LoginComponent />
                </Route>

                <AuthenticatedRoute path="/welcome/:name">
                    <WelcomeComponent />
                </AuthenticatedRoute>

                  <AuthenticatedRoute exact path="/todos" component={ListToDo} />
                    
 
                <AuthenticatedRoute path="/logout">
                    <LogoutComponent />
                </AuthenticatedRoute>

                <AuthenticatedRoute path="/todos/:id">
                    <Todo />
                </AuthenticatedRoute>


                

                <Route>
                    <ErrorComponent />
                </Route>              
                    
            
            </Switch>
            <Footer />
            </>
        </Router>
            
        </div>
    )
}



export default ToDoApp;