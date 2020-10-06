import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import {executeHelloWorldPathVariable, executeHelloWorldService} from '../../../api/todo/HelloWorldService'
const WelcomeComponent = () => {
    const {name} = useParams();
    const[message, setMessage] = useState('default')
 
      function  retrieveWelcomeMessage(){
       // executeHelloWorldService()
     // .then(response => setMessage(response.data.message))
 
        executeHelloWorldPathVariable(name)
        .then(response => setMessage(response.data.message))
        .catch(error => handleError(error))
     }

     


     function handleError(error){
         console.log(error.response.data.message);

     }

    return (
        <>
    <h1>Welcome!</h1>
    <div className="container">
        Welcome {name}!You can manage your todos <Link to="/todos">here</Link> 
    
    </div>
    <div className="container">
        Click here to get a customized welcome message.
        <button className="button btn btn-succes"  onClick={retrieveWelcomeMessage}>Get Welcome Message</button>
    </div>
    <div className="container">
      {message}
    </div>
   </>
    )

   
}


export default WelcomeComponent;