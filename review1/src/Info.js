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
    useEffect(()=>{
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name,
            nickname
        })
    })
    //useEffect(()=>{},[name]) 이런식으로 useEffect를 설계하면 배열 안의 값인 name 값이 변경될 때만 useEffect가 실행된다.
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