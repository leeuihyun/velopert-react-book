import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
function ValidationSample() {
    const inputRef = useRef(null);
    const onChange = (e) => {
        console.log(e.target.value);
    }
    const onClick = e => {
        inputRef.current.value ="";
        inputRef.current.focus();
    }
    return (
        <div>
            <input type="text" onChange = {onChange} ref = {inputRef}/>
            <button onClick = {onClick}>button</button>
        </div>
  )
}

export default ValidationSample;
