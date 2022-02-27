import React from 'react'
import { useState } from 'react';

function SampleState() {
    const [list,setList] = useState([]);
    const [number,setNumber] = useState(1);
    const [inputText,setInputText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const nextList = list.concat({
            id : number,
            text : inputText
        })
        setNumber(number+1);
        setInputText('');
        setList(nextList);
    }

    const onChange = e => {
        setInputText(e.target.value);
    }
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input type="text" onChange = {onChange}/>
                <button type = "submit">button</button>
            </form>
            <ul>
                {list.map((item)=>(
                    <li key = {item.id}>{item.text}</li>
                ))}
            </ul>
        </div>    
    )
}

export default SampleState;