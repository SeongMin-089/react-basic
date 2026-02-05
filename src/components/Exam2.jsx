import React ,{useState}from 'react'

const Exam2 = () => {
    const [text, setText]=useState('hello')

    const onClickButton =()=> {
        text==='hello'?setText('goodbye'):setText('hello')
    }
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={onClickButton}>click</button>
    </div>
  )
}

export default Exam2