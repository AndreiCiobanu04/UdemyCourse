import moment from 'moment';
import React ,{useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage}  from 'formik'
import {newTodo, retrieveTodo} from './../../../api/todo/TodoDataService'
import AuthenticationService from './../AuthenticationService'
import {updateTodo} from './../../../api/todo/TodoDataService'
import {  useHistory } from 'react-router-dom';
const Todo = () => {
    const {id} = useParams();
    const history = useHistory();

     const [state, setState] = useState({
         id : id,
         description :  'Learn Forms',
         targetDate : moment( new Date()).format('YYYY-MM-DD')
})

    useEffect ( ()=>  {

    let username = AuthenticationService.getUserLoggedIn();
    retrieveTodo(username, state.id)
    .then(response => setState({
        id: state.id,
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
    }))
    }
,[] )


    let description = state.description;
    let targetDate = state.targetDate;
    // let {description,targetDate} = state;
    console.log(state.id);


    function onSubmit(values){
        let username = AuthenticationService.getUserLoggedIn();
  
        if(state.id === -1){
            newTodo(username, {
                id:state.id,
                description:values.description,
                targetDate:values.targetDate
            }).then(()=> history.push('/todos'))
        }
        else {
        updateTodo(username, state.id, {
            id: state.id,
            description: values.description,
            targetDate: values.targetDate

        }).then(() => {
            history.push('/todos')
        })
    }
    }

 
    function validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a description'
        }
        else if(values.description.length<5){
        
            errors.description = 'Enter at least 5 Characters in Description'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid targetDate'
        }
        return errors;

  
    }

   




    return(
        <>
         <div>Todo Component for id - {id}</div>
         <div>
        <h1>Todo</h1>
        <div className="container"></div>
          <Formik initialValues={{
              description,
              targetDate}}
              onSubmit={onSubmit}
              validate={validate}
              validateOnChange={false}
              validateOnBlur={false}
              enableReinitialize={true}
              >
            { 
                (props) => (
                    <Form>
                        <ErrorMessage name="description" component="div" 
                                        className="alert alert-warning" />
                        <ErrorMessage name="targetDate" component="div" 

                                        className="alert alert-warning" />
                        <fieldset className="form-group">
                            <label>Description</label>
                            <Field type="text" name="description" className="form-control"/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Target Date</label>
                            <Field type="date" name="targetDate" className="form-control"/>
                        </fieldset>
                        <button className="btn btn-succes button" type="submit">Save</button>
                    </Form>
                ) 
            }



          </Formik>

    </div>


        </>
         
    )





}

export default Todo;