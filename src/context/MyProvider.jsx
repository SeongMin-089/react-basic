import React,{useState} from 'react'
import { MyContext } from './MyContact'
export const MyProvider = ({children}) => {
    const [value, setValue]=useState("Hello Context!")
  return (
    <MyContext.Provider value={{value,setValue}}>
        {children}
    </MyContext.Provider>
  )
}
