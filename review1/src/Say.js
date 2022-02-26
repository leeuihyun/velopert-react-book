import { useState } from "react";

const Say = () => {
    const [message,setMessage] = useState('');
    const onClickEnter = () => {
        setMessage('Enter');
    }
    const onClickLeave = () => {
        setMessage('Leave');
    }
    return (
        <div>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
            <div>
                <h1>{message}</h1>
            </div>
        </div>
    )
}

export default Say;