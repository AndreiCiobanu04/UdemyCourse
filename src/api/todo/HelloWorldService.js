
import axios from 'axios'


     
    export const      executeHelloWorldService = () => {
        return axios.get('http://localhost:8080/hello')
       // console.log('executed service')
    }

    export const executeHelloWorldPathVariable = (name) => {
       return axios.get(`http://localhost:8080/hello/${name}`)
    }

  





