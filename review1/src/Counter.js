import React from 'react'
import { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case 'INCREAMENT' : 
            return {value : state.value+1};
        case 'DECREAMENT' : 
            return {value : state.value-1};
        default : 
            return state;
    }
}
function Counter() {
    const [state,dispatch] = useReducer(reducer,{value : 0});
    return (
        <div>
            <h1>{state.value}</h1>
            <button onClick = {()=>dispatch({type : 'INCREAMENT'})}>INCREASE</button>
            <button onClick = {()=>dispatch({type : 'DECREAMENT'})}>DECREASE</button>
        </div>
  )
}

export default Counter;