import React from 'react'

function EventPractice() {
  const onChange =(e) => {
    console.log(e);
  }
    return (
    <div>
        <h1>Event practice</h1>
        <input type="text" placeholder = "무엇이든 입력해봐!" onChange = {onChange}/>
    </div>
  )
}

export default EventPractice;