import React from 'react'
import './styles/Exam1.css'

const Exam1 = ({name, age}) => {
    const user={
    name:'Alice',
    age:21
  }
  return (
    <div>
        <h2>나는 <span className='name'>{name}</span>이고 나이는 <span className='age'>{age}</span>야</h2>
    </div>
  )
}

export default Exam1