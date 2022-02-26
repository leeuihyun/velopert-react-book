import React from 'react'
import {useState} from 'react';

function EventPractice() {
  const [user,setUser] = useState({
      name : '',
      id : ''
  })

    const onChange =(e) => {
        const {value,name} = e.target;
        console.log(value);
        setUser({
            ...user,
            [name] : value
        })
     }
     const onClick = ()=>{
        const {name,id} = user;
        alert(name + ':' + id);
     }
    return (
    <div>
        <h1>Event practice</h1>
        <input type="text" placeholder = "name" onChange = {onChange} name = "name" value = {user.name}/>
        <input type="text" placeholder = "id" onChange = {onChange} name = "id" value = {user.id}/>
        <button onClick = {onClick}>button</button>
    </div>
  )
}

export default EventPractice;