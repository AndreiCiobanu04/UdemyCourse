import React from 'react'
import './CounterButton.css'

const CounterButton = (props) => {

        const {by, incrementMethod, decrementMethod} = props;

     //console.log(by);

      return (
        <div className="counter">
            <button onClick={() => incrementMethod(by)}>+{by}</button>
            <button onClick={() => decrementMethod(by)}>-{by}</button>

        </div>
    )
 

      


     

}

export default CounterButton;