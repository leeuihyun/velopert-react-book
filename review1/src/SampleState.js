import React from 'react'
import { useState,useRef } from 'react';

function SampleState() {
    const [list,setList] = useState([]);
    const [number,setNumber] = useState(1);
    const [inputText,setInputText] = useState('');
    const inputRef = useRef('');

    const onSubmit = (e) => {
        e.preventDefault();
        const nextList = list.concat({
            id : number,
            text : inputText
        })
        setNumber(number+1);
        setInputText('');
        setList(nextList);
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    const onRemove = id => {
        const nextList = list.filter((item)=>
            item.id !== id
        )
        setList(nextList);
    }
    const onChange = e => {
        setInputText(e.target.value);
    }
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input type="text" onChange = {onChange} ref = {inputRef}/>
                <button type = "submit">button</button>
            </form>
            <ul>
                {list.map((item)=>(
                    <li key = {item.id} onDoubleClick = {()=>onRemove(item.id)}>{item.text}</li>
                ))}
            </ul>
        </div>    
    )
}

export default SampleState;