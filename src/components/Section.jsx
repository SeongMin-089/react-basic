import React from 'react'

const Section = () => {
    const user = {
        name:'Tom',
        isLogin:true
    }

    if(user.isLogin) {
        return (
          <div>로그인</div>
        )
    } else {
        return (
          <div>로그아웃</div>
        )        
    }
}

export default Section