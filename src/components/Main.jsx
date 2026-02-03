import React from 'react'

function Main() {
    const name = 'Alice'
    const age = 24

    const numbers = [10, 20, 30, 40]
    const obj = {
        city: 'seoul',
        hobby: 'programing'
    }
    const isLogin=false
  return (
    <div className='main'>
        <p>{isLogin? "로그인 되었습니다":"로그아웃입니다"}</p>
        <h2>main 입니다</h2>
        <p>내 이름은 {name}입니다.</p>
        <p>내 나이는 {age}살 입니다.</p>
        <p>내 나이는 {numbers[0]}살 입니다.</p>
        <p>나는 {obj.city}에서 살고 취미는 {obj.hobby}입니다.</p>
    </div>
  )
}

export default Main