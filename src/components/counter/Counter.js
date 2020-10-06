import React, { useState} from 'react'
import CounterButton from './CounterButton'




const Counter = () => {
    
    const [count, setCount] = useState(0);



    return (
        <div className="counter">
        <CounterButton by={1} incrementMethod={increment} decrementMethod={decrement}  />
        <CounterButton by={5} incrementMethod={increment} decrementMethod={decrement}/> 
        <CounterButton by={10} incrementMethod={increment} decrementMethod={decrement}/>
        <span>{count}</span>
        <div><button  className="reset" onClick={reset}>RESET</button>
        </div>
        </div>
    )

    function increment(by){
    
        setCount( + count + by);

    }
    function reset(){
        setCount(0);
    }

    function decrement(by){
        setCount (count - by);
    }

}

export default Counter;