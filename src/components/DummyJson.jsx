import React,{useEffect,useState} from 'react'
import axios from 'axios'

const DummyJson = () => {
    const[recipeId,setRecipeID]=useState(1)
    const[recipe,setRecipe]=useState(null)
    const[loading, setLoding]=useState(false)

    useEffect(()=>{
        setLoding(true)
        axios.get(`https://dummyjson.com/recipes/${recipeId}`)
        .then((res)=>{
            setRecipe(res.data)
            setLoding(false)
        })
    },[recipeId])
  return (
    <div>
        <h2>레시피 상세</h2>
        <button onClick={()=>setRecipeID(1)}>1번 레시피</button>
        <button onClick={()=>setRecipeID(2)}>2번 레시피</button>
        <button onClick={()=>setRecipeID(3)}>3번 레시피</button>

        {loading && <p>로딩중</p>}
        {recipe && (

            <div>
                <p>name:{recipe.name}</p>
                <p>difficulty:{recipe.difficulty}</p>
                <p>cuisine:{recipe.cuisine}</p>
            </div>
        )}
    </div>
  )
}

export default DummyJson