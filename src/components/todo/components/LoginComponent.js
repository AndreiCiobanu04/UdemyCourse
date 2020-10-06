
import React, {useState} from 'react';
import {  useHistory } from 'react-router-dom';
import AuthenticationService from '../AuthenticationService';
import '../../../App.css';

const LoginComponent = () => {

        // const[username, setUsername] = useState('in28minutes');
        // const[password, setPassword] = useState('')
        const history = useHistory();
        const [state, setState] = useState({
            username: "",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false

        });
        

        function handleChange(e){
            //console.log(state);
            setState({
                ...state,
                [e.target.name] : e.target.value          
                 });
                 

        }

        const loginClicked = () =>{
        // console.log(state);
            if(state.username==='andrei' && state.password==='salut'){
              AuthenticationService.registerSuccessfulLogin(state.username, state.password);
                history.push(`/welcome/${state.username}`);
            setState({
                ...state,
                showSuccessMessage: true,
                hasLoginFailed: false});
            }
            else{ 
                setState({
                    ...state,
                    hasLoginFailed: true,
                    showSuccessMessage: false});

            }
                }
        // function handleUsernameChange(e){
        //     console.log(e.target.value);
        //     setUsername(e.target.value);

        // }

        // function handlePasswordChange(e){
        //     setPassword(e.target.value);
        // }
        //console.log(state);

         return (<div>
             <h1>Login</h1>
             <div className="container">
             {state.showSuccessMessage && 
             <div>Login Successful</div> }
             {state.hasLoginFailed &&
             <div className="alert alert-warning">Invalid Credentials</div>}
            UserName: <input type="text" name="username" value={state.username} onChange={handleChange} />
            Password: <input type="password" name="password" value={state.password} onChange={handleChange}/>
            <button className="btn btn-succes button" onClick={loginClicked}>Login</button>    
            </div>
    </div>)

    



}

export default LoginComponent