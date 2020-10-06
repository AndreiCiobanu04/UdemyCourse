import React, {useState, useEffect} from 'react'
import AuthenticationService from './../AuthenticationService'
import {retrieveAllTodos} from './../../../api/todo/TodoDataService'
import {deleteTodo} from './../../../api/todo/TodoDataService'
import Todo from './Todo'
import {  useHistory } from 'react-router-dom';
import moment from 'moment'
const ListToDo = () => {

    const [state, setState] = useState({
        todos:[ 
            // {id: 1, description:'Learn React', done:false, targetDate:new Date()},
            //    {id: 2, description:'Work', done:false, targetDate:new Date()},
            //    {id:3, description:'Eat', done:false, targetDate:new Date()},
            //    {id:4, description:'Sleep', done:false, targetDate:new Date()},
            //        {id:5, description:'Repeat', done:false, targetDate:new Date()}
                ],
        message : null      
        
    
    })
    
    const history = useHistory();

   useEffect ( ()=>  {
       refreshTodos()
       }
   ,[] )

   function refreshTodos(){
    let username = AuthenticationService.getUserLoggedIn();
    retrieveAllTodos(username)
    .then(response => setState({
        ...state,
        todos : response.data
    }))


   }

    function deleteTodoById(id){
        let username = AuthenticationService.getUserLoggedIn();
       // console.log(id + " " + username);
       deleteTodo(username, id)
       .then( response  => { setState({
           ...state,
           message : `delete of todo ${id} successful`})
           refreshTodos();
       })}

       function updateTodoById(id){
        history.push(`/todos/${id}`)
        console.log('ok' + id);
           

       }

       function addTodo() {
            history.push('/todos/-1')
}

   

     return(
         <div>
             <h1>List Todos</h1>
             {state.message && <div className="alert alert-success">{state.message}</div>}
             <div className="container">
             <table className="table">
                 <thead>
                     <tr>
                         <th>id</th>
                         <th>description</th>
                         <th>Done</th>
                         <th>Target Date</th>
                     </tr>
                 </thead>
                 <tbody>
                     { state.todos.map(todo => 
                     <tr key={todo.id}>
                         <td>{todo.id}</td>
                         <td>{todo.description}</td>
                         <td>{todo.done.toString()}</td>
                         <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                         <td><button onClick={() => deleteTodoById(todo.id) }className="btn button btn-warning">Delete</button></td>
                         <td><button onClick={() => updateTodoById(todo.id) }className="btn button btn-success">Update</button></td>
                     </tr>
                    )}                       
                 </tbody>
             </table>
             <div className="row" >
                 <button className="button btn btn-succes" onClick={addTodo}>Add</button>
             </div>
             </div>
         </div>
     )
}

export default ListToDo;