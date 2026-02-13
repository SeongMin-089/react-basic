import React,{useContext} from 'react'
import { CounterContext } from '../context/CounterContext'

const Display = () => {
    const {count}=useContext(CounterContext)
  return (
    <div>
        현재의 카운트 : {count}
    </div>
  )
}

export default Display