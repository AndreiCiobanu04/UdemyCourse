import React, {Component} from 'react'

class AuthenticationService extends Component {
  registerSuccessfulLogin(username, password){
    console.log('registerSuccessfulLogin')
    sessionStorage.setItem('authenticatedUser', username);

}

 logout(){
     sessionStorage.removeItem('authenticatedUser');
 }

 isUserLoggedIn(){
     let user = sessionStorage.getItem('authenticatedUser');
    if(user===null) return false;
    return true;
 }
 
 getUserLoggedIn(){
  let user = sessionStorage.getItem('authenticatedUser');
 if(user===null) return false;
 return user;
}
 

}



export default new  AuthenticationService();