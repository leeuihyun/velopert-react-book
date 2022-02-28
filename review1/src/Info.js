import React from 'react'
import { useEffect,useState } from 'react'

const Info = () =>{
    const [nickname,setNickname] = useState('');
    const [name,setName] = useState('');
    const onChangeName = (e) => {
        const {value} = e.target;
        setName(value);
    }
    const onChangeNickname = e => {
        const {value} = e.target;
        setNickname(value);
    }
  return (
    <div>
        <div>
            <input type="text" onChange = {onChangeName} name = "name"/>
            <input type="text" onChange = {onChangeNickname} name = "nickname"/>
        </div>
        <div>
            <h3>name : {name}</h3>
            <h3>nickname : {nickname}</h3>
        </div>
    </div>
  )
}

export default Info;