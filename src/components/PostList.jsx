import React,{useState,useEffect} from 'react'
import axios from 'axios'

const PostList = () => {
    const [post,setPost] = useState([])
    const [loading,setLoding]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                console.log(res.data)
                setPost(res.data.slice(0,10))
                setLoding(false)
            })
            .catch((err)=>{
                console.error('데이터를 가져오지 못했습니다.',err)
                setError('데이터를 가져오지 못했습니다.')
                setLoading(false)
            })
    },[])

    if(loading) return <p>로딩중...</p>
    if(error) return <p>{error}</p>
  return (
    <div>
        <h2>게시물 목록</h2>
        <ul>
            {post.map((p)=>(
                <li key={p.id}>
                    {p.title}
                    {p.body}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostList